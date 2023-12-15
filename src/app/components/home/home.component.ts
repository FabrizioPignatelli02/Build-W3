import { Component, OnInit, DoCheck, AfterContentInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/app/models/post';
import { Auth } from 'src/app/auth/auth';
import { CommentService } from 'src/app/services/comment.service';
import { UserService } from 'src/app/services/user.service';
import { PostComment } from 'src/app/models/comment';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user';
import { AnimationStateService } from 'src/app/services/animation-state.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, DoCheck, AfterContentInit {
  constructor(
    private postSrv: PostService,
    private commentService: CommentService,
    private userService: UserService,
    private animationSrv: AnimationStateService
  ) {}

  postSearch: Post[] = [];
  userId!: number;
  userName!: string;

  ngOnInit(): void {
    this.postSrv.getAllPosts().subscribe((result: Post[]) => {
      this.postSearch = result;
      console.log('Result', this.postSearch[0].userId);
      this.userId = this.postSrv.getUserId();
      this.postSearch.forEach((post) => {
        this.userService.getUserById(post.userId).subscribe((user) => {
          post.user = user;
        });
      });
    });

    const hasExecuted = this.animationSrv.checkAnimationState();
    console.log('Animazione:', hasExecuted);

    if (hasExecuted === true) {
      const logo = document.getElementById('logo') as HTMLImageElement;
      const main = document.getElementById('main') as HTMLDivElement;
      main.classList.remove('to-show');
      logo.classList.remove('nascosto');
      logo.classList.add('d-none');
    }

    sessionStorage.setItem('animationExecuted', 'true');
  }
  plusLike(id: number, post: Post) {
    this.postSrv.plusLike(id, post).subscribe(() => {});
  }
  plusView(id: number, post: Post) {
    this.postSrv.plusView(id, post).subscribe(() => {});
  }
  getUser(id: number) {
    this.userService.getUserById(id).subscribe((user) => {});
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
