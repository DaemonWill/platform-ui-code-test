import { TestBed } from '@angular/core/testing';
import { ProviderCardComponent } from './provider-card.component';

describe('ProviderCardComponent', () => {
  //define the component to test
  let component : ProviderCardComponent;
  //define a spy wrapper for the component functions
  let emitProviderIndexSpy : any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProviderCardComponent]
    });
    component = TestBed.get(ProviderCardComponent);
    //assign value to the local spy wrappers
    emitProviderIndexSpy = spyOn(component.emitProviderIndex, "emit").and.callThrough();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should call its event emitter when a card-button is clicked', () => {
    component.handleCardInteraction(0);
    expect(emitProviderIndexSpy).toHaveBeenCalled();
  });
});
