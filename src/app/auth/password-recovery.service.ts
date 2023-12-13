import { Injectable } from '@angular/core';
import * as sgMail from '@sendgrid/mail';

@Injectable({
  providedIn: 'root',
})
export class PasswordRecoveryService {
  constructor() {
    sgMail.setApiKey(
      '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'
    );
  }

  sendEmail(to: string, subject: string, text: string, html: string) {
    const msg = {
      to,
      from: 'lucafavaretto@icloud.com',
      subject,
      text,
      html,
    };
    return sgMail.send(msg);
  }
}
