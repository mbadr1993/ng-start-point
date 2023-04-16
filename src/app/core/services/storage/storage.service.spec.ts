import {TestBed} from '@angular/core/testing';

import {StorageService} from './storage.service';
import {CookiesStorageService} from "./cookies-storage.service";
import {LocalStorageService} from "./local-storage.service";
import {SessionStorageService} from "./session-storage.service";
import {StorageType} from "../../../shared/enums/storage-types.enums";

describe('StorageService', () => {
  let service: StorageService;
  let localStorageSpy: any;
  let cookiesServiceSpy: any;
  let sessionStorageSpy: any;
  beforeEach(() => {
    localStorageSpy = jasmine.createSpyObj('CookiesStorageService', ['setStorage','getStorage','clearStorage','clearAllStorage'])
    cookiesServiceSpy = jasmine.createSpyObj('LocalStorageService', ['setStorage','getStorage','clearStorage','clearAllStorage'])
    sessionStorageSpy = jasmine.createSpyObj('SessionStorageService', ['setStorage','getStorage','clearStorage','clearAllStorage'])

    TestBed.configureTestingModule({
      providers: [
        StorageService,
        {
          provide: CookiesStorageService,
          useValue: cookiesServiceSpy
        },
        {
          provide: LocalStorageService,
          useValue: localStorageSpy
        },
        {
          provide: SessionStorageService,
          useValue: sessionStorageSpy
        },
      ]
    });
    service = TestBed.inject(StorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call setStorage from local storage based on type',
    () => {
      service.setStorage('key', 'value', StorageType.localStorage);
      expect(localStorageSpy.setStorage).toHaveBeenCalledTimes(1);
    }
  );
  it('should call setStorage from session storage based on type',
    () => {
      service.setStorage('key', 'value', StorageType.sessionStorage);
      expect(sessionStorageSpy.setStorage).toHaveBeenCalledTimes(1);
    }
  );
  it('should call setStorage from cookies storage based on type',
    () => {
      service.setStorage('key', 'value', StorageType.cookiesStorage);
      expect(cookiesServiceSpy.setStorage).toHaveBeenCalledTimes(1);
    }
  );
  it('should call getStorage from local storage based on type',
    () => {
      service.getStorage('key', StorageType.localStorage);
      expect(localStorageSpy.getStorage).toHaveBeenCalledTimes(1);
    }
  );
  it('should call getStorage from session storage based on type',
    () => {
      service.getStorage('key', StorageType.sessionStorage);
      expect(sessionStorageSpy.getStorage).toHaveBeenCalledTimes(1);
    }
  );
  it('should call getStorage from cookies storage based on type',
    () => {
      service.getStorage('key', StorageType.cookiesStorage);
      expect(cookiesServiceSpy.getStorage).toHaveBeenCalledTimes(1);
    }
  );
  it('should call clear storage from local storage based on type',
    () => {
      service.clearStorage('key', StorageType.localStorage);
      expect(localStorageSpy.clearStorage).toHaveBeenCalledTimes(1);
    }
  );
  it('should call clear storage from session storage based on type',
    () => {
      service.clearStorage('key', StorageType.sessionStorage);
      expect(sessionStorageSpy.clearStorage).toHaveBeenCalledTimes(1);
    }
  );
  it('should call clear storage from cookies storage based on type',
    () => {
      service.clearStorage('key', StorageType.cookiesStorage);
      expect(cookiesServiceSpy.clearStorage).toHaveBeenCalledTimes(1);
    }
  );
  it('should call clear all storage from local storage based on type',
    () => {
      service.clearAllStorage(StorageType.localStorage);
      expect(localStorageSpy.clearAllStorage).toHaveBeenCalledTimes(1);
    }
  );
  it('should call clear all storage from session storage based on type',
    () => {
      service.clearAllStorage(StorageType.sessionStorage);
      expect(sessionStorageSpy.clearAllStorage).toHaveBeenCalledTimes(1);
    }
  );
  it('should call clear all storage from cookies storage based on type',
    () => {
      service.clearAllStorage(StorageType.cookiesStorage);
      expect(cookiesServiceSpy.clearAllStorage).toHaveBeenCalledTimes(1);
    }
  );

  it('should call all clear all storage if no type passed',
    () => {
      service.clearAllStorage();
      expect(cookiesServiceSpy.clearAllStorage).toHaveBeenCalledTimes(1);
      expect(localStorageSpy.clearAllStorage).toHaveBeenCalledTimes(1);
      expect(sessionStorageSpy.clearAllStorage).toHaveBeenCalledTimes(1);
    }
  );

});
