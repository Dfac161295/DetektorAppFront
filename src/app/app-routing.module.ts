import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { CreateComponent } from './create/create.component';
import { DeleteComponent } from './delete/delete.component';
import { ReporteComponent } from './reporte/reporte.component';
import { SaveComponent } from './save/save.component';
import { UpdateComponent } from './update/update.component';
import { VehiculoComponent } from './vehiculo/vehiculo.component';


const routes: Routes = [
  { path: 'catalogo-component', component: CatalogoComponent },
  { path: 'vehiculo-component', component: VehiculoComponent,
    children : [
      {path: 'create-component', component: CreateComponent},
      {path: 'save-component', component: SaveComponent},
      {path: 'update-component', component: UpdateComponent},
      {path: 'delete-component', component: DeleteComponent}
    ]
  },
  { path: 'reporte-component', component: ReporteComponent },
  { path: '/', component: CatalogoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
