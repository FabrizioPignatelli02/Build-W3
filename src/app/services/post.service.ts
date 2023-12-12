import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Post } from '../models/post';
import { Auth } from '../auth/auth';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private readonly apiUrl = environment.apiURl;

  constructor(private http: HttpClient) {}

  getUserId(): number {
    const user = localStorage.getItem('user');
    if (user) {
      const userData: Auth = JSON.parse(user);
      return userData.user.id;
    }
    return 0;
  }
  getAllPosts() {
    return this.http.get<Post[]>(this.apiUrl + 'posts');
  }

  getPostById(id: number) {
    return this.http.get<Post>(`${this.apiUrl}posts/${id}`);
  }

  getPostsByUserId(userId: number) {
    return this.http.get<Post[]>(`${this.apiUrl}posts/?userId=${userId}`);
  }

  createPost(post: Partial<Post>) {
    return this.http.post(this.apiUrl, post);
  }
  updatePost(post: Partial<Post>) {
    return this.http.put(`${this.apiUrl}posts/${post.id}`, post);
  }

  deletePost(postId: number) {
    return this.http.delete(`${this.apiUrl}/${postId}`);
  }
}
