import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FillupformComponent } from './fillupform.component';

describe('FillupformComponent', () => {
  let component: FillupformComponent;
  let fixture: ComponentFixture<FillupformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FillupformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FillupformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
