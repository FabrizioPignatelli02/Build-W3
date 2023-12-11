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
  idpost: number = 0;
  constructor(private route: ActivatedRoute, private srvPost: PostService) {}

  ngOnInit(): void {
    if (this.route.snapshot.paramMap.get('id')) {
      this.idpost = +this.route.snapshot.paramMap.get('id')!;
      console.log('id', this.idpost);
    }
  }
}
