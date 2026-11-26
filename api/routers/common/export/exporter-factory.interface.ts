import { ExportType } from './export-type.enum';
import { Exporter } from './exporter.interface';

type ExporterConstructor<T> = new () => Exporter<T>;

export abstract class ExporterFactory<T = any> {
  private readonly typeToFactory: Map<string, ExporterConstructor<T>>;

  constructor(resolvers: [ExportType, ExporterConstructor<T>][]) {
    this.typeToFactory = new Map(resolvers);
  }

  public getExporter(exportType: string): Exporter<T> | undefined {
    const ExporterType = this.typeToFactory.get(exportType);
    return ExporterType && new ExporterType();
  }
}
