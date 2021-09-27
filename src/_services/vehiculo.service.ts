import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  constructor(private http: HttpClient) {}

  getVehiculos(): Observable<any>{
    return this.http.get("http://localhost:8080/detektor/vehiculo/getAll");
  }

  getVehiculosAvailables() : Observable<any>{
    return this.http.get('http://localhost:8080/detektor/vehiculo/getAllVehiculesAvailables');
  }

  getVehiculosByPropietaryId(dbid : any) : Observable<any>{
    return this.http.get('http://localhost:8080/detektor/vehiculo/getAllVehiculesByPropietaryId/' + dbid);
  }

  createVehiculos(vehiculo: any){
    return this.http.put('http://localhost:8080/detektor/vehiculo/update',vehiculo).subscribe();
  }

  updateVehiculos(vehiculo: any){
    return this.http.put('http://localhost:8080/detektor/vehiculo/update', vehiculo).subscribe();
  }

  deleteVehiculos(placa : any) : Observable<any>{
    return this.http.delete('http://localhost:8080/detektor/vehiculo/delete/' + placa);
  }

}
