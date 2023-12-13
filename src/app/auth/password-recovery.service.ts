import { Injectable } from '@angular/core';
import * as sgMail from '@sendgrid/mail';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PasswordRecoveryService {
  constructor() {
    sgMail.setApiKey('API_KEY_SENGRID');
  }
}
sendEmail(to:string, subject:string,text:string,html:string){}