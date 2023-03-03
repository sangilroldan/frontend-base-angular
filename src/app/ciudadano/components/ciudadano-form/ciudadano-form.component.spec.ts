import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CiudadanoFormComponent } from './ciudadano-form.component';

describe('CiudadanoFormComponent', () => {
  let component: CiudadanoFormComponent;
  let fixture: ComponentFixture<CiudadanoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CiudadanoFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CiudadanoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
