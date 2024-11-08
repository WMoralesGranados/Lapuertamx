import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FpCcComponent } from './fp-cc.component';

describe('FpCcComponent', () => {
  let component: FpCcComponent;
  let fixture: ComponentFixture<FpCcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FpCcComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FpCcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
