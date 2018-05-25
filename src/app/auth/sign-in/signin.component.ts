import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'ngwzp-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  public signInForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, public router: Router) { }

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
        this.router.navigate(['/shop']);
      });
  }
}
