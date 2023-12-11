import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  constructor(private srvPost: PostService) {}

  ngOnInit(): void {}
  onSubmit(forms: NgForm) {
    let post: Partial<Post> = {
      title: forms.value.title,
      body: forms.value.body,
    };
    this.srvPost.createPost(post).subscribe(() => {
      console.log('postato' + JSON.stringify(post));
    });
  }
}
