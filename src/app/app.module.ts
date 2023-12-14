import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth/auth.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { DetailComponent } from './components/detail/detail.component';
import { EditComponent } from './components/edit/edit.component';
import { CreateComponent } from './components/create/create.component';
import { LoginComponent } from './auth/login/login.component';

import { MyProfileComponent } from './components/myprofile/myprofile.component';
import { PasswordRecoveryComponent } from './auth/password-recovery/password-recovery.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HorizontalCardComponent } from './components/horizontal-card/horizontal-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    DetailComponent,
    EditComponent,
    CreateComponent,
    LoginComponent,
    MyProfileComponent,
    PasswordRecoveryComponent,
    HorizontalCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
