import { Component, OnInit, DoCheck, AfterContentInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/app/models/post';
import { Auth } from 'src/app/auth/auth';
import { CommentService } from 'src/app/services/comment.service';
import { UserService } from 'src/app/services/user.service';
import { PostComment } from 'src/app/models/comment';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, DoCheck, AfterContentInit {
  constructor(
    private postSrv: PostService,
    private commentService: CommentService,
    private userService: UserService
  ) {}

  postSearch: Post[] = [];
  userId!: number;

  ngOnInit(): void {
    this.postSrv.getAllPosts().subscribe((result: Post[]) => {
      this.postSearch = result;
      console.log('Result', this.postSearch[0].userId);
      this.userId = this.postSrv.getUserId();
    });
  }
  getUser(id: number) {
    this.userService.getUserById(id).subscribe((user) => {
      console.log(user.name);
      return user.name;
    });
  }
  ngDoCheck(): void {
    if (this.postSrv.postSearch) {
      if (this.postSearch !== this.postSrv.postSearch) {
        this.postSearch = this.postSrv.postSearch;
        console.log('Nuovo valore di postSearch:', this.postSearch);
      }
    }
  }
  ngAfterContentInit(): void {}

  goToDetails(id: number) {
    console.log('Ciao details');
  }

  deletePost(postId: number) {
    this.postSrv.deletePost(postId).subscribe(() => {
      console.log(`Post with id: ${postId} deleted`);
      this.postSrv
        .getAllPosts()
        .subscribe((result) => (this.postSearch = result));
    });
  }
}
