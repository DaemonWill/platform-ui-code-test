import { TestBed } from '@angular/core/testing';
import { ListComponent } from './list.component';
import { StorageService } from '../../services/storage.service';

describe('ListComponent', () => {
  //define the component to test
  let component : ListComponent;
  //define a spy wrapper for the injectable service
  let storageSpy : jasmine.SpyObj<StorageService>;

  beforeEach(() => {
    //assign which functions to mock for the injectable service
    storageSpy = jasmine.createSpyObj("StorageService", ["getSelectedProviders", "getUnselectedProviders",
                                                          "setSelectedProviders", "setUnselectedProviders"]);
    //assign mocked functionality for the service
    storageSpy.getSelectedProviders.and.returnValue([{
      id : '44',
      name : 'DayMan',
      address : '4444 Champion of le sol',
      phone : '1234567890'
    }]);
    storageSpy.getUnselectedProviders.and.returnValue([{
      id : '33',
      name : "FinnHuman",
      address : "44 Land of OOO",
      phone : '0987654321'
    }]);
    TestBed.configureTestingModule({
      providers: [
        ListComponent,
        { provide : StorageService, useValue : storageSpy }
      ]
    });
    component = TestBed.get(ListComponent);
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should attempt to get the selectedProviders from the storageService on init', () => {
    component.ngOnInit();
    expect(storageSpy.getSelectedProviders).toHaveBeenCalled();
  });

  it('should attempt to get the unselectedProviders from the storageService on init', () => {
    component.ngOnInit();
    expect(storageSpy.getUnselectedProviders).toHaveBeenCalled();
  });

  it('should populate unselectedProviders on init', () => {
    component.ngOnInit();
    expect(component.unselectedProviders.length).toBeGreaterThan(0);
  });

  it('should populate selectedProviders on init', () => {
    component.ngOnInit();
    expect(component.selectedProviders.length).toBeGreaterThan(0);
  });

  it('should populate the correct info into selectedProviders', () => {
    component.ngOnInit();
    expect(component.selectedProviders[0].id).toEqual('44');
  });

  it('should populate the correct info into unselectedProviders', () => {
    component.ngOnInit();
    expect(component.unselectedProviders[0].id).toEqual('33');
  });

  it('should update the instanced lists on selectProvider()', () => {
    component.ngOnInit();
    component.selectProvider(0);
    //selectProviders(index) should remove the provider from unselected and place into selected
    let isInstanceUpdated = component.selectedProviders.length == 2 &&
                            component.unselectedProviders.length == 0 &&
                            component.selectedProviders[1].id == "33";
    expect(isInstanceUpdated).toBe(true);
  });

  it('should update the instanced lists on unselectProvider()', () => {
    component.ngOnInit();
    component.unselectProvider(0);
    //unselectProviders(index) should remove the provider from selected and place into unselected
    let isInstanceUpdated = component.unselectedProviders.length == 2 &&
                            component.selectedProviders.length == 0 &&
                            component.unselectedProviders[1].id == "44";
    expect(isInstanceUpdated).toBe(true);
  });

  it('should call the setSelected functionality in the storageService on selectProvider()', () => {
    component.ngOnInit();
    component.selectProvider(0);
    expect(storageSpy.setSelectedProviders).toHaveBeenCalled();
  });

  it('should call the setUnselected functionality in the storageService on selectProvider()', () => {
    component.ngOnInit();
    component.selectProvider(0);
    expect(storageSpy.setUnselectedProviders).toHaveBeenCalled();
  });

  it('should call the setSelected functionality in the storageService on unselectProvider()', () => {
    component.ngOnInit();
    component.unselectProvider(0);
    expect(storageSpy.setSelectedProviders).toHaveBeenCalled();
  });

  it('should call the setUnselected functionality in the storageService on unselectProvider()', () => {
    component.ngOnInit();
    component.unselectProvider(0);
    expect(storageSpy.setUnselectedProviders).toHaveBeenCalled();
  });
});
