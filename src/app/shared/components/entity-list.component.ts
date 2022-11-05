import { OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { saveAs } from 'file-saver';

import { Entity } from '../models/models';
import { StorageService } from '../services/storage.service';
import { DeleteEntityDialogService } from './delete-entity-dialog/delete-entity-dialog.service';
import { PaginatedListComponent } from './paginated-list.component';
import { AppContextService } from '../services/app-context.service';
import { ExportRequestParams } from '../services';
import { ExportType } from '../models/export-type.model';

export abstract class EntityListComponent<T extends Entity> extends PaginatedListComponent<T> implements OnInit {

  constructor(
    protected readonly storageService: StorageService<T>,
    protected readonly deleteEntityDialogService: DeleteEntityDialogService,
    route: ActivatedRoute,
    router: Router,
    appContext: AppContextService,
  ) {
    super(route, router, appContext);
  }

  public override async loadItems(): Promise<void> {
    this.startLoading();

    const requestParams = this.getRequestParams({
      size: this.pageSize,
      page: this.currentPage,
      sortDirection: this.sortDirection,
      sortField: this.sortField,
    });

    try {
      const response = await this.storageService.getItems(requestParams);
      this.itemsSubject$.next(response);
    } catch (error) {
      this.handleError(error, 'Unable to load items');
    } finally {
      this.endLoading();
    }
  }

  public async exportToCsv() {
    return this.export(ExportType.CSV);
  }

  public async exportToTxt() {
    return this.export(ExportType.TXT);
  }

  protected async remove(entity: T) {
    const result = await this.deleteEntityDialogService.show({
      message: 'Are you sure want to delete this item?',
    });

    if (!result.success) {
      return;
    }

    this.startLoading();

    try {
      await this.storageService.delete(entity.id);
      return this.loadItems();
    } catch (error) {
      this.handleError(error, 'Unable to remove item');
    } finally {
      this.endLoading();
    }
  }

  protected getExportFileName(): string {
    return 'items';
  }

  protected async export(exportType = ExportType.TXT): Promise<void> {
    this.startLoading();

    try {
      const cd = new Date();
      const fileName = this.getExportFileName()
        + `_${cd.getFullYear()}_${cd.getMonth() + 1}_${cd.getDate()}_${cd.getHours()}_${cd.getMinutes()}`
        + this.getExtension(exportType);

      const exportParams = new ExportRequestParams({
        ...this.getRequestParams(),
        exportType,
      });

      saveAs(await this.storageService.exportItems(exportParams), fileName);
    } catch (error) {
      this.handleError(error, 'Unable to export');
    } finally {
      this.endLoading();
    }
  }

  private getExtension(exportType: ExportType): string {
    switch (exportType) {
      case ExportType.CSV:
        return '.csv';
      case ExportType.TXT:
        return '.txt';
      case ExportType.XML:
        return '.xml';
      default:
        throw new Error(`Unknown export type: ${exportType}.`);
    }
  }

}
