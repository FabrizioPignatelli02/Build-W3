import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private postSrv: PostService) {}

  elencoArticoli: Post[] = [];

  ngOnInit(): void {
    this.postSrv.getAllPosts().subscribe((result) => {
      this.elencoArticoli = result;
      console.log('Result', this.elencoArticoli);
    });
  }

  goToDetails(id: number) {
    console.log('Ciao details');
  }
}
