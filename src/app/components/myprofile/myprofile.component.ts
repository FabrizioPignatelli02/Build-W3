import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';
import { Auth } from 'src/app/auth/auth';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.scss'],
})
export class MyProfileComponent implements OnInit {
  userForm!: FormGroup;
  user: Auth | null = null;

  constructor(private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      name: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(5)]],
    });

    this.loadUserData();
  }

  private loadUserData() {
    const user = this.authService.getUserInfo();

    if (user && user.user && user.user.id) {
      this.authService.loadUserDetails(user.user.id).subscribe(
        (userDetails) => {
          this.user = user;
          this.userForm.patchValue({
            name: userDetails.name,
            email: userDetails.email,
            password: '',
          });
        },
        (error) => {
          console.error('Errore durante il caricamento dei dettagli :', error);
        }
      );
    } else {
      console.error("Errore: Impossibile ottenere l'ID dell'utente.");
    }
  }

  onSubmit() {
    const formData = this.userForm.value;

    if (this.user) {
      this.authService.updateUserInfo(formData).subscribe(
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
