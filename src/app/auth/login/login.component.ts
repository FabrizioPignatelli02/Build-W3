import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(private authSrv: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(5),
      ]),
    });
  }

  login(form: NgForm) {
    try {
      this.authSrv.login(form.value).subscribe((response) => {
        localStorage.setItem('token', response.accessToken);
      });
    } catch (error) {
      alert('Login errato!');
      this.router.navigate(['/login']);
    }
  }

  signUp() {
    console.log(this.registerForm.value);
    try {
      this.authSrv.register(this.registerForm.value).subscribe();
    } catch (error: any) {
      console.log(error);
      alert(error);
      this.router.navigate(['/register']);
    }
  }

  bool: boolean = true;

  bounceLeft() {
    this.bool = !this.bool;
  }

  bounceRight() {
    this.bool = !this.bool;
  }
}
