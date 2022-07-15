import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailymutualfundNAVComponent } from './dailymutualfund-nav.component';

describe('DailymutualfundNAVComponent', () => {
  let component: DailymutualfundNAVComponent;
  let fixture: ComponentFixture<DailymutualfundNAVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailymutualfundNAVComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DailymutualfundNAVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
