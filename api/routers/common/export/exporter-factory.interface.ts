import { ExportType } from './export-type.enum';
import { Exporter } from './exporter.interface';

type ExporterConstructor<T = any> = new () => Exporter<T>;

export abstract class ExporterFactory<T = any> {

  protected readonly typeToFactory: Map<ExportType, ExporterConstructor>;

  constructor(resolvers: [ExportType, ExporterConstructor<T>][]) {
    this.typeToFactory = new Map<ExportType, ExporterConstructor<T>>(resolvers);
  }

  public getExporter(exporterType: ExportType): Exporter<T> {
    const ctor = this.typeToFactory.get(exporterType);
    if (!ctor) {
      throw new Error(`Unknown export type ${exporterType}.`);
    }
    return new ctor();
  }

}
