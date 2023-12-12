import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated = false;

  login(
    text: string,
    email: string,
    password: string,
    confirmPassword: string
  ): boolean {
    console.log('valori forniti:', text, email, password, confirmPassword);

    const isTextValid = typeof text === 'string';
    const isEmailValid = typeof email === 'string';
    const isPasswordValid = typeof password === 'string';
    const isConfirmPasswordValid = password === confirmPassword;
    const isValid =
      isTextValid && isEmailValid && isPasswordValid && isConfirmPasswordValid;

    if (isValid) {
      this.isAuthenticated = true;
      return true;
    } else {
      this.isAuthenticated = false;
      return false;
    }
  }

  logout(): void {
    this.isAuthenticated = false;
  }

  get isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }
}
