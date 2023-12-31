import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PostComment } from '../models/comment';

@Injectable({
  providedIn: 'root',
})
export class CommentService {

  private readonly apiUrl = environment.apiURl;

  constructor(private http: HttpClient) {}

  getCommentsForPost(postId: number) {
    return this.http.get<PostComment[]>(`${this.apiUrl}comments?postId=${postId}`)
  }

  deleteComment(commentId: number) {
    return this.http.delete(`${this.apiUrl}comments/${commentId}`)
  }

  createComment(comment:Partial<PostComment>) {
    return this.http.post<PostComment>(`${this.apiUrl}comments`, comment)
  }
  
}