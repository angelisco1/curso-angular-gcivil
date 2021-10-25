import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HijaComponent } from './hija.component';

describe('HijaComponent', () => {
  let component: HijaComponent;
  let fixture: ComponentFixture<HijaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HijaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HijaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
