import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosetsComponent } from './closets.component';

describe('ClosetsComponent', () => {
  let component: ClosetsComponent;
  let fixture: ComponentFixture<ClosetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClosetsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClosetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
