import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fcpg185Component } from './fcpg185.component';

describe('Fcpg185Component', () => {
  let component: Fcpg185Component;
  let fixture: ComponentFixture<Fcpg185Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Fcpg185Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Fcpg185Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
