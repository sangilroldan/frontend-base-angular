import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CiudadanosApiService } from '../../services/ciudadanos-api.service';

@Component({
  selector: 'app-ciudadano-form',
  templateUrl: './ciudadano-form.component.html',
  styleUrls: ['./ciudadano-form.component.css'],
  providers: [FormBuilder, CiudadanosApiService]
})
export class CiudadanoFormComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder, 
    private ciudadanoService: CiudadanosApiService,
    private router: Router,
    private route:ActivatedRoute
    ) {

  }

  ngOnInit(): void {

  }

  ciudadanoForm = this.formBuilder.group({
    id: this.formBuilder.control({ value: '', disabled: true }),
    nombre: this.formBuilder.control('', Validators.required),
    apellidos: this.formBuilder.control('', Validators.required),
    tipoIdentificacionId: this.formBuilder.control('', Validators.required),
    documentoIdentidad: this.formBuilder.control('', Validators.required),
    direccion: this.formBuilder.control('', Validators.required),
    celular: this.formBuilder.control('', Validators.required),
    ciudadId: this.formBuilder.control('', Validators.required),    
    aceptaPolitica: this.formBuilder.control('', Validators.required)
  });

  saveCiudadano() {
    console.log('Presionado');

    if (this.ciudadanoForm.valid) {
      console.log('Data validada');

      this.ciudadanoService.saveCiudadano(this.ciudadanoForm.getRawValue())
        .subscribe(item => {
          console.log(item);
          alert('Guardado con exito!')
        });
    }
  }

  redirectToCitasList(){
    //TODO: se debe actualizar    
    this.router.navigate(['ciudadanos']);
  }
}
