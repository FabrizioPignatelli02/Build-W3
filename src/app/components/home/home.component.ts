import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/app/models/post';
import { Auth } from 'src/app/auth/auth';
import { CommentService } from 'src/app/services/comment.service';
import { UserService } from 'src/app/services/user.service';
import { PostComment } from 'src/app/models/comment';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    private postSrv: PostService,
    private commentService: CommentService,
    private userService: UserService
  ) {}

  elencoArticoli: Post[] = [];
  userId!: number;

  ngOnInit(): void {
    this.postSrv.getAllPosts().subscribe((result: Post[]) => {
      this.elencoArticoli = result;
      this.elencoArticoli.forEach((post) => {
        this.commentService
          .getCommentsForPost(post.id)
          .subscribe((comments) => {
            comments.forEach((comment) => {
              this.userService.getUserById(comment.userId).subscribe((user) => {
                console.log(user);
                comment.user = user;
              });
            });

            post.comments = comments;
          });
      });
      console.log('Result', this.elencoArticoli[0].userId);
      this.userId = this.postSrv.getUserId();
    });
  }

  goToDetails(id: number) {
    console.log('Ciao details');
  }

  deletePost(postId: number) {
    this.postSrv.deletePost(postId).subscribe(() => {
      console.log(`Post with id: ${postId} deleted`);
      this.postSrv
        .getAllPosts()
        .subscribe((result) => (this.elencoArticoli = result));
    });
  }

  onSubmit(form: NgForm, postId: number) {
    let newComment: Partial<PostComment> = {
      body: form.value.body,
      userId: this.userId,
      postId,
    };

    this.commentService.createComment(newComment).subscribe((newComment) => {
      this.userService.getUserById(this.userId).subscribe((user) => {
        newComment.user = user;
        
        form.reset();

        this.elencoArticoli
          .find((post) => post.id === newComment.postId)
          ?.comments.push(newComment);
      });
    });
  }
}
