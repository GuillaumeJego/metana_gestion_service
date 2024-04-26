import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Post } from './post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  API = 'http://localhost:3000/posts'; //lien qui nous lis avec le lien 
  private http = inject(HttpClient);

  getPosts(){
    return this.http.get<Post[]>(`${this.API}`);
  }
}
