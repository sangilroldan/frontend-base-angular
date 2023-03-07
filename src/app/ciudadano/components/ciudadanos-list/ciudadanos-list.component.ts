import { Component, OnInit } from '@angular/core';
import { CiudadanoModel } from '../../models/ciudadano.model';
import { CiudadanosApiService } from '../../services/ciudadanos-api.service';

@Component({
  selector: 'app-ciudadanos-list',
  templateUrl: './ciudadanos-list.component.html',
  styleUrls: ['./ciudadanos-list.component.css'],
  providers: [CiudadanosApiService]
})
export class CiudadanosListComponent implements OnInit {

  ciudadanosdata!: CiudadanoModel[];

  displayColumns: string[] = ["id", "nombre", "apellidos", "celular", "active", "actions"];

  constructor(private ciudadanoService: CiudadanosApiService) {

  }

  ngOnInit(): void {
    this.loadCiudadanosLista();
  }

  loadCiudadanosLista() {
    this.ciudadanoService
      .getCiudadanos()
      .subscribe(response => {
        this.ciudadanosdata = response._list;
      });
  }
}