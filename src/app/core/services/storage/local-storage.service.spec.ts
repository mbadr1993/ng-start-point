import {TestBed} from '@angular/core/testing';

import {LocalStorageService} from './local-storage.service';
import {BrowserDynamicTestingModule, platformBrowserDynamicTesting} from "@angular/platform-browser-dynamic/testing";

describe('LocalStorageService', () => {
  let service: LocalStorageService;

  beforeEach(() => {
    TestBed.resetTestEnvironment();
    TestBed.initTestEnvironment(
      BrowserDynamicTestingModule,
      platformBrowserDynamicTesting()
    );
    TestBed.configureTestingModule({
      providers: [LocalStorageService]
    });
    service = TestBed.inject(LocalStorageService);
  });

  it('should initialized the localStorage service', () => {
    expect(service).toBeTruthy();
  });

  it('should add rose to the local storage and get it', () => {
    service.setStorage('name', 'rose');
    expect(service.getStorage('name')).toEqual('rose');
  })

  it('should accept objects', ()=>{
    service.setStorage('name', {name: 'rose', color: 'red'});
    expect(service.getStorage('name')).toEqual({name: 'rose', color: 'red'});
  });

  it('should remove rose from local storage', () => {
    service.setStorage('name', 'rose');
    service.clearStorage('name');
    expect(service.getStorage('name')).toBeNull();
  })

  it('should remove all keys from local storage', () => {
    service.setStorage('name', 'rose');
    service.setStorage('color', 'bink');
    service.clearAllStorage();
    expect(service.getStorage('name')).toBeNull();
    expect(service.getStorage('color')).toBeNull();
  })

});
