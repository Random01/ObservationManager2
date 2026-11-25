import { spawnSync } from 'node:child_process';
import { readdirSync, readFileSync, unlinkSync, writeFileSync } from 'node:fs';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import ts from 'typescript';

const root = fileURLToPath(new URL('../', import.meta.url));
const source = new URL('../src/', import.meta.url);
const inventory = new URL('coverage-inventory.generated.spec.ts', source);
const files = readdirSync(source, { recursive: true, withFileTypes: true })
  .filter((entry) => entry.isFile() && /\.ts$/.test(entry.name) && !/\.(spec|test|d)\.ts$/.test(entry.name))
  .map((entry) => relative(fileURLToPath(source), join(entry.parentPath, entry.name)).replaceAll('\\', '/'))
  .filter((path) => {
    if (path === 'main.ts') return false;
    const text = readFileSync(new URL(path, source), 'utf8');
    const file = ts.createSourceFile(path, text, ts.ScriptTarget.Latest);
    return file.statements.some(
      (statement) => !ts.isImportDeclaration(statement) && !ts.isExportDeclaration(statement) && !ts.isInterfaceDeclaration(statement) && !ts.isTypeAliasDeclaration(statement),
    );
  })
  .sort();

// The bootstrap entry point starts the browser application and is outside the unit-test scope.
// Load remaining modules after the suite so they enter the coverage report at zero.
const imports = files.map((path) => `  () => import(${JSON.stringify(`./${path.slice(0, -3)}`)}),`).join('\n');
writeFileSync(
  inventory,
  `
const modules = [
${imports}
];

afterAll(async () => {
  const browser = globalThis as typeof globalThis & {
    __coverage__?: Record<string, {
      s: Record<string, number>;
      f: Record<string, number>;
      b: Record<string, number[]>;
    }>;
  };
  const before = structuredClone(browser.__coverage__ ?? {});
  for (const load of modules) {
    await load();
  }
  const coverage = browser.__coverage__;
  if (!coverage) throw new Error('The Angular test build did not enable coverage.');

  for (const [path, counters] of Object.entries(coverage)) {
    if (before[path]) {
      Object.assign(counters, before[path]);
      continue;
    }
    for (const key of Object.keys(counters.s)) counters.s[key] = 0;
    for (const key of Object.keys(counters.f)) counters.f[key] = 0;
    for (const counts of Object.values(counters.b)) counts.fill(0);
  }
}, 60000);
`,
  { flag: 'wx' },
);

try {
  const result = spawnSync(
    process.execPath,
    [
      'node_modules/@angular/cli/bin/ng.js',
      'test',
      '--watch=false',
      '--browsers=ChromeHeadless',
      '--code-coverage',
      '--progress=false',
      '--karma-config=scripts/karma-coverage.cjs',
    ],
    { cwd: root, stdio: 'inherit' },
  );
  if (result.error) throw result.error;
  process.exitCode = result.status ?? 1;
} finally {
  unlinkSync(inventory);
}
