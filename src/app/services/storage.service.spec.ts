import { TestBed } from '@angular/core/testing';
import { StorageService } from './storage.service';

describe('StorageService', () => {
  let service : StorageService, selected : any[], unselected : any[];

  beforeEach(() => {
    TestBed.configureTestingModule({});
    //initialize a new instance of the service being tested
    service = TestBed.get(StorageService);
    //define some simple mock values to inject into the service's setter functions
    selected = [{
      id : '44',
      name : 'DayMan',
      address : '4444 Champion of le sol',
      phone : '1234567890'
    }];
    unselected = [{
      id : '33',
      name : "FinnHuman",
      address : "44 Land of OOO",
      phone : '0987654321'
    }];
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should initialize with a falsy hasChange field', () => {
    expect(service.getChange()).toBeFalsy();
  });

  it('should successfully encapsulate the selectedProviders obj with set/getSelectedProviders()', () => {
    service.setSelectedProviders(selected);
    //the selectedProviders field should be returned successfully with the getter
    expect(service.getSelectedProviders()).toEqual(selected);
  });

  it('should successfully encapsulate the unselectedProviders obj with set/getUnselectedProviders()', () => {
    service.setUnselectedProviders(unselected);
    //the selectedProviders field should be returned successfully with the getter
    expect(service.getUnselectedProviders()).toEqual(unselected);
  });
});
