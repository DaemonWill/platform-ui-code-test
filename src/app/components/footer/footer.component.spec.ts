import { TestBed } from '@angular/core/testing';
import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  //define the component to test
  let component : FooterComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FooterComponent]
    });
    component = TestBed.get(FooterComponent);
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
