import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {VehiculoService} from '../../_services/vehiculo.service';
import {CatalogoService} from '../../_services/catalogo-service.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  propietario : any[];
  lstvehiculos : any[] = [];
  vehiculos : any[];
  enabledCursor: string;
  PointerEvents : string;
  selectedCar: string;
  selectedProp: string = "";
  @ViewChild('vehiculolist') vehiculoLst: ElementRef;
  @ViewChild('propietariolist') propietarioLst: ElementRef;



  constructor(public vehiculoService : VehiculoService,public propietarioService : CatalogoService, private render : Renderer2) { }

  ngOnInit(): void {
    this.vehiculoService.getVehiculosAvailables().subscribe(data => {
      this.vehiculos = data;
    });
    this.propietarioService.getCatalogo().subscribe(data => {
      this.propietario = data;
    });
  }

  cmbPropietario(e){

    if(e == "7"){
     this.enabledCursor = "0.2";
     this.PointerEvents = "none";
    }else{
     this.enabledCursor = "1";
     this.PointerEvents = "auto";
    }

   this.vehiculoService.getVehiculosByPropietaryId(e).subscribe(data => {
     this.lstvehiculos = data;
   });
  

  }


  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      
      var idContainer = event.item.element.nativeElement.parentElement.parentElement.id;
      
      

      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);

      //recorrer e insertar o actualizar
      if(idContainer == 'ExistenciaId'){ //se registran o actualizan

        let datos = event.container.data;
        
        if(this.selectedProp != ""){

        for(let i=0; i<datos.length;i++){
          this.vehiculoService.updateVehiculos({
            "placa" : datos[i]['placa'],
            "dbid_propietario" : this.selectedProp,
            "dbid_tipo_vehiculo": datos[i]['tipo_vehiculo']['dbid_'],
            "vin" : datos[i]['vin'],
            "marca" : datos[i]['marca'],
            "cilindrada" : datos[i]['cilindrada'],
            "color" : datos[i]['color'],
            "chasis" : datos[i]['chasis'],
            "modelo" : datos[i]['modelo']
          });

          console.log("INSERTANDO --------------------------------");
        
        }

      }else{
        alert('Debe seleccionar un Propietario');
        this.lstvehiculos = [];
        this.vehiculoService.getVehiculosAvailables().subscribe(data => {
          this.vehiculos = data;
        });
      }

        

      }else{ //se desasocian los vehiculos con los propietarios
        
        let datos = event.container.data;
        
        for(let i=0; i<datos.length;i++){
          this.vehiculoService.updateVehiculos({
            "placa" : datos[i]['placa'],
            "dbid_propietario" : 7,
            "dbid_tipo_vehiculo": datos[i]['tipo_vehiculo']['dbid_'],
            "vin" : datos[i]['vin'],
            "marca" : datos[i]['marca'],
            "cilindrada" : datos[i]['cilindrada'],
            "color" : datos[i]['color'],
            "chasis" : datos[i]['chasis'],
            "modelo" : datos[i]['modelo']
          });
          console.log("ELIMINANDO --------------------------------");
        
        }


      }


    }
  }

}
