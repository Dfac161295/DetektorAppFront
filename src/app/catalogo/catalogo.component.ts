import { Component, OnInit } from '@angular/core';
import {CatalogoService} from '../../_services/catalogo-service.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})

export class CatalogoComponent implements OnInit {

  dataSource: any[];
  displayedColumns: string[] = ['dbid_', 'nombres', 'apellidos', 'fecha_nacimiento','direccion','telefono','email'];
  

  constructor(public catalogoService : CatalogoService) {
    
   }

  ngOnInit(): void {
    
    this.catalogoService.getCatalogo().subscribe(data => {
      this.dataSource = data;
    });
  }

}
