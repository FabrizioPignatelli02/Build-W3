import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Auth } from 'src/app/auth/auth';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  user!: Auth | null;
  posts!: Post[];
  constructor(private srvAuth: AuthService, private srvPost: PostService) {}

  string: string = '';

  ngOnInit(): void {
    this.srvAuth.restore();
    this.srvAuth.user$.subscribe((_user) => {
      this.user = _user;
    });
    this.srvPost.getAllPosts().subscribe((posts) => (this.posts = posts));
  }

  logout() {
    let audio = new Audio();
    audio.src = '../../assets/audio/farewell-my-friend.mp3';
    audio.load();
    audio.play();
    this.srvAuth.logout();
  }

  search(event: any) {
    this.srvPost.postSearch = this.posts.filter((post) =>
      post.title.toLowerCase().includes(event.target.value)
    );
    console.log(this.srvPost.postSearch);
  }
}
