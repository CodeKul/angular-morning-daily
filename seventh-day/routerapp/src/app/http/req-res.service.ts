import { User } from './domain';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReqResService {

  constructor(
    private http: HttpClient
  ) { }

  getUsers() {
    return this.http.get(`https://reqres.in/api/users`)
  }

  saveUser(user: User) {
    return this.http.post(
      `https://reqres.in/api/users`,
      user,
      {}
    )
  }
}
