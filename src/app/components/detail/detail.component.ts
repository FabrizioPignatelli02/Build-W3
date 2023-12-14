import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';
import { ActivatedRoute } from '@angular/router';
import { CommentService } from 'src/app/services/comment.service';
import { UserService } from 'src/app/services/user.service';
import { PostComment } from 'src/app/models/comment';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  idPost!: number;
  post!: Post;
  userId!: number;

  constructor(
    private route: ActivatedRoute,
    private srvPost: PostService,
    private commentService: CommentService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    if (this.route.snapshot.paramMap.get('id')) {
      this.idPost = +this.route.snapshot.paramMap.get('id')!;
      this.srvPost.getPostById(this.idPost).subscribe((result) => {
        this.post = result;
        this.userId = this.srvPost.getUserId()
        this.commentService
          .getCommentsForPost(result.id)
          .subscribe((comments) => {
            comments.forEach((comment) => {
              this.userService.getUserById(comment.userId).subscribe((user) => {
                console.log(user);
                comment.user = user;
              });
            });

            result.comments = comments;
          });
      });
    }
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

        this.post.comments.push(newComment);
      });
    });
  }
}
