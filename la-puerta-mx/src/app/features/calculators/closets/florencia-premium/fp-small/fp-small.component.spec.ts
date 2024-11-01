import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FpSmallComponent } from './fp-small.component';

describe('FpSmallComponent', () => {
  let component: FpSmallComponent;
  let fixture: ComponentFixture<FpSmallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FpSmallComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FpSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
