import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetSellComponent } from './asset-sell.component';

describe('AssetSellComponent', () => {
  let component: AssetSellComponent;
  let fixture: ComponentFixture<AssetSellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssetSellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetSellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
