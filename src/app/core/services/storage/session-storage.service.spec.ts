import {TestBed} from '@angular/core/testing';

import {SessionStorageService} from './session-storage.service';

describe('SessionStorageService', () => {
  let service: SessionStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SessionStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add rose', ()=>{
    service.setStorage('name', 'rose');
    expect(service.serviceStorage).not.toBeNull();
  })


  it('should add and get rose', ()=>{
    service.setStorage('name', 'rose');
    expect(service.getStorage('name')).toEqual('rose');
  })

  it('should accept objects', ()=>{
    service.setStorage('name', {name: 'rose', color: 'red'});
    expect(service.getStorage('name')).toEqual({name: 'rose', color: 'red'});
  });

  it('should add rose and remove it', ()=>{
    service.setStorage('name', 'rose');
    expect(service.serviceStorage).not.toBeNull();
    service.clearStorage('name');
    expect(service.getStorage('name')).toBeUndefined();
  })


  it('should add rose and remove it', ()=>{
    service.setStorage('name', 'rose');
    expect(service.serviceStorage).not.toBeNull();
    service.clearAllStorage();
    expect(service.serviceStorage).toEqual({});
  })
});
