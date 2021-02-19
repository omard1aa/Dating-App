import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountService } from '../services/account.service';
import { User } from '../_models/user';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};
  users: any;
  constructor(public accountService: AccountService, private httpClient: HttpClient) {
  }

  ngOnInit(): void {
    this.setCurrentUser();
  }

  getUsername(){
    if(this.model != null)
    {
      return JSON.parse(localStorage.getItem('user')).username;
    }
  }
  login(){
    this.accountService.login(this.model).subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
    });
  }

  setCurrentUser(){
    const user: User = JSON.parse(localStorage.getItem('user'));
    this.accountService.setCurrentUser(user);
  }
  logout(){
    this.accountService.logout();
  }
}
