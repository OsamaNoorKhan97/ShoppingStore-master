import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../../LoginComponents/login/login.component';
import { ForgetPasswordComponent } from '../../LoginComponents/forget-password/forget-password.component';

const routes: Routes = [
  {path: '', component:LoginComponent},
  {path: 'forget-passsword', component:ForgetPasswordComponent},
];

@NgModule({
  declarations:[],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyLoginRoutingModule { }
