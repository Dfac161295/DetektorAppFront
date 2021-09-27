import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  constructor(private http: HttpClient) {}

  getVehiculos(): Observable<any>{
    return this.http.get("https://detektorbackend.herokuapp.com/detektor/vehiculo/getAll");
  }

  getVehiculosAvailables() : Observable<any>{
    return this.http.get('https://detektorbackend.herokuapp.com/vehiculo/getAllVehiculesAvailables');
  }

  getVehiculosByPropietaryId(dbid : any) : Observable<any>{
    return this.http.get('https://detektorbackend.herokuapp.com/vehiculo/getAllVehiculesByPropietaryId/' + dbid);
  }

  createVehiculos(vehiculo: any){
    return this.http.put('https://detektorbackend.herokuapp.com/vehiculo/update',vehiculo).subscribe();
  }

  updateVehiculos(vehiculo: any){
    return this.http.put('https://detektorbackend.herokuapp.com/vehiculo/update', vehiculo).subscribe();
  }

  deleteVehiculos(placa : any) : Observable<any>{
    return this.http.delete('https://detektorbackend.herokuapp.com/vehiculo/delete/' + placa);
  }

}
