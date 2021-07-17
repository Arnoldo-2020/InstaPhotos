import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { ResponsePosts } from '../interfaces/interfaces';

const url = environment.url;

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  pagePost = 0;

  constructor( private http: HttpClient ) { }


  getPost( pull: boolean = false ){

    if(pull){
      this.pagePost = 0;
    }

    this.pagePost++;

    return this.http.get<ResponsePosts>(`${url}/posts/?pagina=${this.pagePost}`);

  }

}
