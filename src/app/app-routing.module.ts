import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IrStatusComponent } from './ir-status/ir-status.component';
import { IrDetailsComponent } from './ir-details/ir-details.component';

const routes: Routes = [
  {path:'', redirectTo:'/ir-status', pathMatch:'full'},
  {path:'ir-status', component:IrStatusComponent},
  {path:'ir-details/:irId', component:IrDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
