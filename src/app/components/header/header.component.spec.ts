import { TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  //define the component to test
  let component : HeaderComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeaderComponent]
    });
    component = TestBed.get(HeaderComponent);
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
