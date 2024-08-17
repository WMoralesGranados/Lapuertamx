import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosetModalComponent } from './closet-modal.component';

describe('ClosetModalComponent', () => {
  let component: ClosetModalComponent;
  let fixture: ComponentFixture<ClosetModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClosetModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClosetModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
