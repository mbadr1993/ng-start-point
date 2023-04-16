export interface StorageInterface {
  setStorage(key: any, value: any): void;

  getStorage(key: any): any;

  clearStorage(key: any): void;

  clearAllStorage(): void;
}
