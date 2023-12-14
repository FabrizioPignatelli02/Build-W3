import { Component, OnInit } from '@angular/core';
import { PasswordRecoveryService } from 'src/app/auth/password-recovery.service';

@Component({
  selector: 'app-psw-recovery',
  templateUrl: './psw-recovery.component.html',
  styleUrls: ['./psw-recovery.component.scss'],
})
export class PswRecoveryComponent implements OnInit {
  constructor(private srvPassRec: PasswordRecoveryService) {}

  async sendEmail() {
    try {
      await this.srvPassRec.sendEmail(
        'giuseppe.triolo99@gmail.com',
        'password',
        'hello world',
        '<strong>and easy to do anywhere, even with Node.js</strong>'
      );
      console.log('Email inviata con successo');
    } catch (error) {
      console.error("Errore durante l'invio dell'email:", error);
    }
  }
  ngOnInit(): void {}
}
