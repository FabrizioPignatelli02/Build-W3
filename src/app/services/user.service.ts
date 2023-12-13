import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private readonly apiUrl = environment.apiURl

  constructor(private http: HttpClient) { }

  getUserById(userId: number) {
    return this.http.get<User>(`${this.apiUrl}users/${userId}`)
  }
}
