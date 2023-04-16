import {Injectable} from '@angular/core';
import {StorageInterface} from "../../../shared/interfaces/storage.interface";

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService implements StorageInterface{
  setStorage(key: string, value: any): void {
    if (typeof value === 'object') {
      localStorage.setItem(key, JSON.stringify(value));
    } else {
      localStorage.setItem(key, value);
    }
  }

  getStorage(key: string) {
    try {
      // @ts-ignore
      const value = JSON.parse(localStorage.getItem(key));
      return value;
    } catch (error) {
      return localStorage.getItem(key);
    }
  }

  clearStorage(key: string): void {
    localStorage.removeItem(key)
  }

  clearAllStorage(): void {
    localStorage.clear()
  }
}
