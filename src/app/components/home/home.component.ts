import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/app/models/post';
import { Auth } from 'src/app/auth/auth';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private postSrv: PostService) {}

  elencoArticoli: Post[] = [];
  userId!: number;

  ngOnInit(): void {
    this.postSrv.getAllPosts().subscribe((result) => {
      this.elencoArticoli = result;
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
}
