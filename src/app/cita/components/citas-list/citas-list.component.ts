import { Component, OnInit } from '@angular/core';
import { CitaModel } from '../../models/cita.model';
import { CitasApiService } from '../../services/citas-api.service';

@Component({
  selector: 'app-citas-list',
  templateUrl: './citas-list.component.html',
  styleUrls: ['./citas-list.component.css'],
  providers: [CitasApiService]
})
export class CitasListComponent implements OnInit {

  citasData!: CitaModel[];

  displayColumns: string[] = ["Id","tipoCita", "estado", "fechaHora", "descripcion"];

  ngOnInit(): void{
    this.loadCitasCiudadano();
  }

  constructor(private citaService: CitasApiService){}

  loadCitasCiudadano(){
    this.citaService
    .getCitasCiudadano()
    .subscribe(response => {
      console.log(response._list);
      this.citasData = response._list;
    })
  }

}
