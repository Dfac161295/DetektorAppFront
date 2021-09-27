import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {VehiculoService} from '../../_services/vehiculo.service';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css']
})
export class ReporteComponent implements OnInit {

  dataSource = new MatTableDataSource<any>();
  sort;
  displayedColumns: string[] = ['propietario', 'placa', 'marca', 'color'];
  constructor(public vehiculoService : VehiculoService) { }

  

  

  ngOnInit(): void {
    this.vehiculoService.getVehiculos().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
    });
  }

  @ViewChild(MatSort) set content(content: ElementRef) {
    this.sort = content;
    if (this.sort){
       this.dataSource.sort = this.sort;
  
    }
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

}
