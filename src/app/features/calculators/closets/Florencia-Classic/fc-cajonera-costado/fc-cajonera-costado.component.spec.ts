import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FCCajoneraCostadoComponent } from './fc-cajonera-costado.component';

describe('FCCajoneraCostadoComponent', () => {
  let component: FCCajoneraCostadoComponent;
  let fixture: ComponentFixture<FCCajoneraCostadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FCCajoneraCostadoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FCCajoneraCostadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
