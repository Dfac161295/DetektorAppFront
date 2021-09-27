import { Component, OnInit } from '@angular/core';
import {VehiculoService} from '../../_services/vehiculo.service'

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  placa : any;

  constructor(public vehiculoService:VehiculoService) { }

  ngOnInit(): void {
    
  }

  delete(){
    this.vehiculoService.deleteVehiculos(this.placa).subscribe();
    alert('Se elimino el automovil con placa ' + this.placa);
    this.placa = "";
  }

}
