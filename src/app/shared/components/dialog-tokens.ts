import { InjectionToken } from '@angular/core';

import { MatDialogRef } from '@angular/material/dialog';

import { StorageService } from '../services/storage.service';
import { Entity } from '../models/models';

export const DIALOG_STORAGE_SERVICE_TOKEN = new InjectionToken<StorageService<Entity>>('dialogStorageService');
export const DIALOG_REF_TOKEN = new InjectionToken<MatDialogRef<any>>('dialogRef');
