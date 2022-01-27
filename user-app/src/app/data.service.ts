import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users'); 
    // https://reqres.in/api/users
    // https://jsonplaceholder.typicode.com/users
  }



  getUser(userId: string | Object) {
    return this.http.get('https://jsonplaceholder.typicode.com/users/'+userId)
  }

  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }
}
