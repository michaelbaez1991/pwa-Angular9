import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Posts } from '../model/Posts';

export interface User {
  id: string;
  name: string;
  email: string;
  website: string;
}

@Injectable({
  providedIn: 'root'
})
export class RestApiService {
  api: string = "https://jsonplaceholder.typicode.com";

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.api + '/users')
  }

  postItems(posts: Posts)  {
    let empHeaders = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post<Posts[]>(this.api+ '/posts' , posts);
  }

//   fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     body: JSON.stringify({
//       
//     }),
//     headers: {
//       "Content-type": "application/json; charset=UTF-8"
//     }
//   })
//   .then(response => response.json())
//   .then(json => console.log(json))

// // Output
// {
//   id: 101,
//   title: 'foo',
//   body: 'bar',
//   userId: 1
// }
}