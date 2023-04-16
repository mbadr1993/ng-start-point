import {TestBed} from '@angular/core/testing';

import {SpinnerService} from './spinner.service';

describe('SpinnerService', () => {
  let service: SpinnerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SpinnerService
      ]
    });
    service = TestBed.inject(SpinnerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should change status value',  ()=> {
    service.display(true);
    expect(service.status.value).toEqual(true)
  });
});
