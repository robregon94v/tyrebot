import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'add-vehicle',
        loadChildren: () => import('../../components/vehicles-flow/vehicles-flow.module').then( m => m.VehiclesFlowModule)
      },
      {
        path: 'active-vehicle',
        loadChildren: () => import('../active-vehicles/active-vehicles.module').then( m => m.ActiveVehiclesModule)
      },
      {
        path: '',
        redirectTo: 'active-vehicle'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
