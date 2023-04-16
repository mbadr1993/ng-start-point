import {TestBed} from '@angular/core/testing';

import {CookiesStorageService} from './cookies-storage.service';
import {BrowserDynamicTestingModule, platformBrowserDynamicTesting} from "@angular/platform-browser-dynamic/testing";
import {CookieService} from "ngx-cookie-service";

describe('CookiesStorageService', () => {
  let service: CookiesStorageService;

  beforeEach(() => {
    TestBed.resetTestEnvironment();
    TestBed.initTestEnvironment(
      BrowserDynamicTestingModule,
      platformBrowserDynamicTesting()
    )
    TestBed.configureTestingModule({
      providers: [CookiesStorageService, CookieService]
    });
    service = TestBed.inject(CookiesStorageService);
  });

  let CookiesStorage;
  it('should initialize the cookies storage service', () => {
    expect(service).toBeTruthy();
  });

  it('should add rose to cookies storage and get it', () => {
    service.setStorage('name', 'rose');
    expect(service.getStorage('name')).toEqual('rose');
  });

  it('should accept objects', ()=>{
    service.setStorage('name', {name: 'rose', color: 'red'});
    expect(service.getStorage('name')).toEqual({name: 'rose', color: 'red'});
  });

  it('should remove rose from cookies storage', () => {
    service.setStorage('name', 'rose');
    service.clearStorage('name');
    expect(service.getStorage('name')).toEqual('');
  });

  it('should remove all keys from cookies storage', () => {
    service.setStorage('name', 'rose');
    service.setStorage('job', 'frontend');
    service.clearAllStorage();
    expect(service.getStorage('name')).toEqual('');
    expect(service.getStorage('job')).toEqual('');
  });

});
