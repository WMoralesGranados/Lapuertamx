import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlorenciaClassicSmallComponent } from './florencia-classic-small.component';

describe('FlorenciaClassicSmallComponent', () => {
  let component: FlorenciaClassicSmallComponent;
  let fixture: ComponentFixture<FlorenciaClassicSmallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlorenciaClassicSmallComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlorenciaClassicSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
