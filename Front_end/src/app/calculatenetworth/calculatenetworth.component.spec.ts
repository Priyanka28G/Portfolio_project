import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatenetworthComponent } from './calculatenetworth.component';

describe('CalculatenetworthComponent', () => {
  let component: CalculatenetworthComponent;
  let fixture: ComponentFixture<CalculatenetworthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculatenetworthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatenetworthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
