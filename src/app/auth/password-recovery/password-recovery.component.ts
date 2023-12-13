import { Component, OnInit } from '@angular/core';
import { PasswordRecoveryService } from '../password-recovery.service';

@Component({
  selector: 'app-password-recovery',
  templateUrl: './password-recovery.component.html',
  styleUrls: ['./password-recovery.component.scss'],
})
export class PasswordRecoveryComponent implements OnInit {
  constructor(private srvPassRec: PasswordRecoveryService) {}

  async sendEmail() {
    try {
      await this.srvPassRec.sendEmail(
        'giuseppe.triolo99@gmail.com',
        'password',
        'hello world',
        '<p>contenuto mail</p>'
      );
      console.log('Email inviata con successo');
    } catch (error) {
      console.error("Errore durante l'invio dell'email:", error);
    }
  }
  ngOnInit(): void {}
}
