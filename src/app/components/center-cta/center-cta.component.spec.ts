import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterCtaComponent } from './center-cta.component';

describe('CenterCtaComponent', () => {
  let component: CenterCtaComponent;
  let fixture: ComponentFixture<CenterCtaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CenterCtaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CenterCtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /*it('should create', () => {
    expect(component).toBeTruthy();
  });*/
});
