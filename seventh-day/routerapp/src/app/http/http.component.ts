import { UsersResponse, User } from './domain';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReqResService } from './req-res.service';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {

  usersRes: UsersResponse
  isSc = false
  usr : User

  constructor(
    private reqRes: ReqResService
  ) { }

  ngOnInit() {
  }

  getUsers() {
    this.reqRes.getUsers().subscribe(
      res => this.usersRes as UsersResponse
    )
  }

  saveUser(fnm: string, lnm: string, av: string) {
    let user: User = {
      id: 898,
      first_name: fnm,
      last_name: lnm,
      avatar: av
    }

    this.reqRes.saveUser(user).subscribe(
      res => {
        this.isSc = true
        this.usr = res as User
      }
    )
  }
}
