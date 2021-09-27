import { Component, OnInit } from '@angular/core';
import { VehiculoService} from '../../_services/vehiculo.service'


@Component({
  selector: 'app-save',
  templateUrl: './save.component.html',
  styleUrls: ['./save.component.css']
})
export class SaveComponent implements OnInit {

  placa : any;
  propietario : any;
  tipo_vehiculo : any;
  vin : any;
  marca : any;
  cilindrada : any;
  color : any;
  chasis : any;
  modelo : any;

  constructor(public vehiculoService : VehiculoService) { }

  ngOnInit(): void {
  }

  guardar(){
    this.vehiculoService.createVehiculos({
      "placa" : this.placa,
      "dbid_propietario" : this.propietario,
      "dbid_tipo_vehiculo": this.tipo_vehiculo,
      "vin" : this.vin,
      "marca" : this.marca,
      "cilindrada" : this.cilindrada,
      "color" : this.color,
      "chasis" : this.chasis,
      "modelo" : this.modelo
    });
     
    alert('Registro guardado correctamente.');

    //limpiando variables
  this.placa         = "";
  this.propietario   = "";
  this.tipo_vehiculo = "";
  this.vin           = "";
  this.marca         = "";
  this.cilindrada    = "";
  this.color         = "";
  this.chasis        = "";
  this.modelo        = "";


  }

}
