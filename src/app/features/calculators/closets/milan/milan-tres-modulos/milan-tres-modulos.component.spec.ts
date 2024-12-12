import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MilanTresModulosComponent } from './milan-tres-modulos.component';

describe('MilanTresModulosComponent', () => {
  let component: MilanTresModulosComponent;
  let fixture: ComponentFixture<MilanTresModulosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MilanTresModulosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MilanTresModulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
