import { Injectable } from '@angular/core';
import * as sgMail from '@sendgrid/mail';

@Injectable({
  providedIn: 'root',
})
export class PasswordRecoveryService {
  constructor() {
    sgMail.setApiKey('d-0b26dc011aa84821a949c54ae458ff52');
  }

  sendEmail(to: string, subject: string, text: string) {
    const msg = {
      to,
      from: 'lucafavaretto@icloud.com',
      subject,
      text,
    };
    return sgMail.send(msg);
  }
}
