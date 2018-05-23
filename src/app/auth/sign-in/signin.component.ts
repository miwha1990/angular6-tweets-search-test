import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth/auth.service";

@Component({
  selector: 'ngwzp-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  public signInForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) { }

  ngOnInit() {
    this.buildSignInForm();
  }

  public buildSignInForm() {
    this.signInForm = this.fb.group({
      email: [null, [Validators.required]],
      password: [null, [
        Validators.required,
        Validators.minLength(5)
      ]]
    });
  }

  public submitSignInForm() {
    this.authService
      .signInUser(this.signInForm.value)
      .subscribe(res => {
        console.log(res);
      });
  }
}
