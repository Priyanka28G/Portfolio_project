import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioNavPageComponent } from './portfolio-nav-page.component';

describe('PortfolioNavPageComponent', () => {
  let component: PortfolioNavPageComponent;
  let fixture: ComponentFixture<PortfolioNavPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioNavPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioNavPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
