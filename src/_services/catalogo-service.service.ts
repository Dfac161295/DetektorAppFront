import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CatalogoService {

  constructor(private http: HttpClient) {}

  getCatalogo(): Observable<any>{
    return this.http.get("http://localhost:8080/detektor/propietario/getAll");
  }

}
