import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CiudadanosListComponent } from './ciudadano/components/ciudadanos-list/ciudadanos-list.component';
import { CiudadanoFormComponent } from './ciudadano/components/ciudadano-form/ciudadano-form.component';
import { CitasListComponent } from './cita/components/citas-list/citas-list.component';

const routes: Routes = [
  { path:"", component:CiudadanosListComponent, pathMatch:"full" },
  { path:"ciudadanos", component:CiudadanosListComponent },
  { path:"ciudadano/create", component:CiudadanoFormComponent },
  { path:"ciudadano/edit/:id", component:CiudadanoFormComponent },
  { path:"citas", component:CitasListComponent },
  { path:"citas/:id", component:CitasListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
