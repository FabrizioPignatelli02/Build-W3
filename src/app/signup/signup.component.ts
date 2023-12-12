import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.signupForm = this.fb.group({
      text: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.signupForm.valid) {
      const formValues = this.signupForm.value;
      console.log('Form values:', formValues);

      const isAuthenticated = this.authService.login(
        formValues.text,
        formValues.email,
        formValues.password,
        formValues.confirmPassword
      );

      if (isAuthenticated) {
        this.router.navigate(['/create']);
      } else {
        console.log('Autenticazione fallita');
      }
    }
  }
}
