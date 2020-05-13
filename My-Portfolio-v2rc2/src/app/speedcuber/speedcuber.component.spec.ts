import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeedcuberComponent } from './speedcuber.component';

describe('SpeedcuberComponent', () => {
  let component: SpeedcuberComponent;
  let fixture: ComponentFixture<SpeedcuberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeedcuberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeedcuberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
