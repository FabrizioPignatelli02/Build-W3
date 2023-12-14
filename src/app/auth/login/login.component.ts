import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  registerForm!: FormGroup;
  bool: boolean = true;
  windowWidth!: boolean;

  @HostListener('window:resize', ['event']) onResize(event: Event): void {
    this.checkWindowWidth();
  }

  constructor(private authSrv: AuthService, private router: Router) {}

  private checkWindowWidth(): void {
    this.windowWidth = window.innerWidth >= 800;
  }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(5),
      ]),
    });
    this.checkWindowWidth();
  }

  login(form: NgForm) {
    try {
      this.authSrv.login(form.value).subscribe((response) => {
        let audio = new Audio();
        audio.src = '../../assets/audio/opera-gx.mp3';
        audio.load();
        audio.play();
        localStorage.setItem('token', response.accessToken);
        sessionStorage.setItem('animationExecuted', 'false');
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

  bounceLeft() {
    this.bool = !this.bool;
  }

  bounceRight() {
    this.bool = !this.bool;
  }
}
