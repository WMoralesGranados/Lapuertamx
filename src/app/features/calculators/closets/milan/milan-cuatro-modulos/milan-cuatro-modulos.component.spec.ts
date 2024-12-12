import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MilanCuatroModulosComponent } from './milan-cuatro-modulos.component';

describe('MilanCuatroModulosComponent', () => {
  let component: MilanCuatroModulosComponent;
  let fixture: ComponentFixture<MilanCuatroModulosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MilanCuatroModulosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MilanCuatroModulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
