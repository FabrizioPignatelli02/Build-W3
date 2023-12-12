import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';
import { Auth } from 'src/app/auth/auth';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.scss'],
})
export class MyProfileComponent implements OnInit {
  userForm!: FormGroup;
  user: any;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private postSrv: PostService
  ) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      name: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(5)]],
    });

    this.loadUserData();
  }

  private loadUserData() {
    const user = this.postSrv.getUser();

    if (user) {
      this.user = user;
      this.userForm.patchValue({
        name: user.name,
        email: user.email,
        password: user.password,
      });
    }
  }

  onSubmit() {
    const formData = this.userForm.value;

    if (this.user) {
      this.authService.updateUserInfo(formData, this.user.id).subscribe(
        () => {
          console.log('Informazioni utente aggiornate con successo!');
        },
        (error) => {
          console.error(
            "Errore durante l'aggiornamento delle informazioni utente:",
            error
          );
        }
      );
    } else {
      console.error('Errore: this.user non è definito.');
    }
  }
}
