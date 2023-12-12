import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/app/models/post';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  user!: number;
  constructor(private router: Router, private srvPost: PostService) {}

  ngOnInit(): void {
    this.user = this.srvPost.getUserId();
  }
  onSubmit(forms: NgForm) {
    let post: Partial<Post> = {
      title: forms.value.title,
      body: forms.value.body,
      userId: this.user,
    };
    this.srvPost.createPost(post).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
