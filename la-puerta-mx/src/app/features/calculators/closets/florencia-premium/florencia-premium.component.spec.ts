import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlorenciaPremiumComponent } from './florencia-premium.component';

describe('FlorenciaPremiumComponent', () => {
  let component: FlorenciaPremiumComponent;
  let fixture: ComponentFixture<FlorenciaPremiumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlorenciaPremiumComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlorenciaPremiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
