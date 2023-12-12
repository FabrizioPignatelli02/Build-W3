import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private readonly apiUrl = environment.apiURl;

  constructor(private http: HttpClient) {}

  getAllPosts() {
    return this.http.get<Post[]>(this.apiUrl);
  }

  getPostById(postId: number) {
    return this.http.get<Post>(`${this.apiUrl}/${postId}`);
  }

  getPostsByUserId(userId: number) {
    return this.http.get<Post[]>(`${this.apiUrl}?userId=${userId}`);
  }

  createPost(post: Partial<Post>) {
    return this.http.post(this.apiUrl, post);
  }
  updatePost(post: Partial<Post>) {
    return this.http.put(this.apiUrl, post);
  }

  deletePost(postId: number) {
    return this.http.delete(`${this.apiUrl}/${postId}`);
  }
}
