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
