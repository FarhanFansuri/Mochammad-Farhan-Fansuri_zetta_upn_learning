import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PengumumanComponent } from './pengumuman.component';

describe('PengumumanComponent', () => {
  let component: PengumumanComponent;
  let fixture: ComponentFixture<PengumumanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PengumumanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PengumumanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
