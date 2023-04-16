import {Injectable} from '@angular/core';
import {StorageInterface} from "../../../shared/interfaces/storage.interface";
import {STORAGE_PREFIX} from "../../../shared/contants/defines";

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService implements StorageInterface {
  public serviceStorage: { [key: string]: any } = {};

  setStorage(key: string, value: any): void {
    const newKey = STORAGE_PREFIX + key;
    if (typeof value === 'object') {
      this.serviceStorage[newKey] = JSON.stringify(value);
    } else {
      this.serviceStorage[newKey] = String(value)
    }
  }

  getStorage(key: string): any {
    try {
      const value = JSON.parse(this.serviceStorage[STORAGE_PREFIX + key]);
      return value;
    } catch (error) {
      return this.serviceStorage[STORAGE_PREFIX + key];
    }
  }

  clearStorage(key: any): void {
    delete this.serviceStorage[STORAGE_PREFIX + key];
  }

  clearAllStorage(): void {
    this.serviceStorage = {};
  }
}
