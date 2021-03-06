import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/interfaces';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  posts: Post[] = [];

  enabled: boolean = true;

  constructor( private postsService: PostsService ) {}

  ngOnInit(){
    
    this.nexts();

  }

  reload( event ){

    this.nexts( event, true );
    this.enabled = true;
    this.posts = [];

  }

  nexts( event?, pull: boolean = false ){

    this.postsService.getPost( pull )
      .subscribe( resp => {
        console.log (resp);
        this.posts.push(...resp.posts);

        if(event){
          event.target.complete();
        }
    
        if(resp.posts.length === 0){
          this.enabled = false;
        }

    });

    

  }

}
