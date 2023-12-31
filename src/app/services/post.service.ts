import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Post } from '../models/post';
import { Auth } from '../auth/auth';
import { catchError, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private readonly apiUrl = environment.apiURl;
  postSearch!: Post[];

  constructor(private http: HttpClient) {}

  plusLike(id: number, post: Post) {
    let like: number = post.like++;
    return this.http.put<Post>(`${this.apiUrl}posts/${id}`, post).pipe(
      tap(() => {
        post = { ...post, like: like };
      })
    );
  }

  plusView(id: number, post: Post) {
    let view: number = post.views++;
    return this.http.put<Post>(`${this.apiUrl}posts/${id}`, post).pipe(
      tap(() => {
        post = { ...post, views: view };
      })
    );
  }

  getUserId(): number {
    const user = localStorage.getItem('user');
    if (user) {
      const userData: Auth = JSON.parse(user);
      return userData.user.id;
    }
    return 0;
  }

  getUser() {
    const user = localStorage.getItem('user');
    if (user) {
      const userData: Auth = JSON.parse(user);
      return userData.user;
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
    return this.http.post(this.apiUrl + 'posts', post);
  }
  updatePost(post: Partial<Post>) {
    return this.http.put(`${this.apiUrl}posts/${post.id}`, post);
  }

  deletePost(postId: number) {
    return this.http.delete(`${this.apiUrl}posts/${postId}`);
  }
}
