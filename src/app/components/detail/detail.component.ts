import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  idPost!: number;
  titlePost!: string;
  bodyPost!: string;
  constructor(private route: ActivatedRoute, private srvPost: PostService) {}

  ngOnInit(): void {
    if (this.route.snapshot.paramMap.get('id')) {
      this.idPost = +this.route.snapshot.paramMap.get('id')!;
      this.srvPost.getPostById(this.idPost).subscribe((result) => {
        this.titlePost = result.title;
        this.bodyPost = result.body;
      });
    }
  }
}
