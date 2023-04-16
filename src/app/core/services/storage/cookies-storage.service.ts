import {Injectable} from '@angular/core';
import {CookieService} from "ngx-cookie-service";
import {STORAGE_PREFIX} from "../../../shared/contants/defines";
import {StorageInterface} from "../../../shared/interfaces/storage.interface";

@Injectable({
  providedIn: 'root'
})
export class CookiesStorageService implements StorageInterface {

  constructor(private cookieService: CookieService) {
  }

  setStorage(key: string, value: any, path = '/'): void {
    const newKey = STORAGE_PREFIX + key;
    // Clear storage with the same key before setting it
    if (this.cookieService.check(newKey)) {
      this.clearStorage(newKey)
    }

    if (typeof value === 'object') {
      this.cookieService.set(newKey, JSON.stringify(value), undefined, path);
    } else {
      this.cookieService.set(newKey, value, undefined, path)
    }
  }

  getStorage(key: string) {
    const newKey = STORAGE_PREFIX + key;
    try {
      const value = JSON.parse(this.cookieService.get(newKey));
      return value;
    } catch (error) {
      return this.cookieService.get(newKey);
    }
  }

  clearStorage(key: string): void {
    this.cookieService.delete(STORAGE_PREFIX + key)
  }

  clearAllStorage(): void {
    this.cookieService.deleteAll()
  }
}
