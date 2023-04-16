import {Injectable} from '@angular/core';
import {CookiesStorageService} from "./cookies-storage.service";
import {LocalStorageService} from "./local-storage.service";
import {SessionStorageService} from "./session-storage.service";
import {StorageType} from "../../../shared/enums/storage-types.enums";

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private cookiesStorage: CookiesStorageService, private localStorage: LocalStorageService, private sessionStorage: SessionStorageService) {
  }

  setStorage(key: string, value: any, type: StorageType) {
    this[type].setStorage(key, value);
  }

  getStorage(key: string, type: StorageType) {
    this[type].getStorage(key);
  }

  clearStorage(key: string, type: StorageType) {
    this[type].clearStorage(key)
  }

  clearAllStorage(type?: StorageType) {
    if (type) {
      this[type].clearAllStorage();
    } else {
      this.cookiesStorage.clearAllStorage();
      this.sessionStorage.clearAllStorage();
      this.localStorage.clearAllStorage();
    }
  }
}
