import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Auth } from 'src/app/auth/auth';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  user!: Auth | null;
  constructor(private srvAuth: AuthService) {}

  ngOnInit(): void {
    this.srvAuth.restore();
    this.srvAuth.user$.subscribe((_user) => {
      this.user = _user;
    });
  }

  logout() {
    this.srvAuth.logout();
  }
}
