import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CiudadanosListComponent } from './ciudadanos-list.component';

describe('CiudadanosListComponent', () => {
  let component: CiudadanosListComponent;
  let fixture: ComponentFixture<CiudadanosListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CiudadanosListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CiudadanosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
