import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SigninComponent } from './sign-in/signin.component';
import {MaterialModule} from "../material/material.module";
import {AuthService} from "../services/auth/auth.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [SigninComponent],
  providers: [AuthService]
})
export class AuthModule { }
