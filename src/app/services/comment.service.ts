import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CommentService {

  private readonly apiUrl = environment.apiURl;

  constructor(private http: HttpClient) {}

  getCommentsForPost(postId: number) {
    return this.http.get<Comment[]>(`${this.apiUrl}posts/${postId}`)
  }
}