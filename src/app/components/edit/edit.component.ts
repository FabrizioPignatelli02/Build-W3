import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  post!: Post;
  id!: number;
  constructor(private route: ActivatedRoute, private srvPost: PostService, private router: Router) {}

  ngOnInit(): void {
    if (this.route.snapshot.paramMap.get('id')) {
      this.id = +this.route.snapshot.paramMap.get('id')!;
      this.srvPost.getPostById(this.id).subscribe((post) => (this.post = post));
    }
  }

  onSubmit(forms: NgForm) {
    console.log(forms.form.value);

    let post = forms.form.value;
    post.id = this.id;
    post.userId = this.srvPost.getUserId();

    this.srvPost.updatePost(post).subscribe(() => this.router.navigate(['/']))
  }
}
