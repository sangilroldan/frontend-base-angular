import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CiudadanosListComponent } from './ciudadano/components/ciudadanos-list/ciudadanos-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { CiudadanoFormComponent } from './ciudadano/components/ciudadano-form/ciudadano-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CitasListComponent } from './cita/components/citas-list/citas-list.component';
import { CitaFormComponent } from './cita/components/cita-form/cita-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CiudadanosListComponent,    
    CiudadanoFormComponent, CitasListComponent, CitaFormComponent   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
