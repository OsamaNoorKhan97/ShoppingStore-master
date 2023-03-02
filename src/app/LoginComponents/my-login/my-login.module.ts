import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../../LoginComponents/login/login.component';
import { ForgetPasswordComponent } from '../../LoginComponents/forget-password/forget-password.component';
import { MyLoginRoutingModule } from './my-login-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent,
    ForgetPasswordComponent
  ],
  imports: [
    CommonModule,
    MyLoginRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ]
})
export class MyLoginModule { }
