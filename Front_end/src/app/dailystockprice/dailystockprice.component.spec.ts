import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailystockpriceComponent } from './dailystockprice.component';

describe('DailystockpriceComponent', () => {
  let component: DailystockpriceComponent;
  let fixture: ComponentFixture<DailystockpriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailystockpriceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DailystockpriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
