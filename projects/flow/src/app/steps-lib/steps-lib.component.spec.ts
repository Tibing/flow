import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepsLibComponent } from './steps-lib.component';

describe('StepsLibComponent', () => {
  let component: StepsLibComponent;
  let fixture: ComponentFixture<StepsLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepsLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepsLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
