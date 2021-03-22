import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AccountService } from '../services/account.service';
import { User } from '../_models/user';
import { ToastrService } from 'ngx-toastr';
import { take } from 'rxjs/operators';
import { Member } from '../_models/member';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};
  users: any;
  user: User;
  constructor(public accountService: AccountService, private httpClient: HttpClient,
              private router: Router, private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.setCurrentUser();
  }

  getUser(){
    this.accountService.currentUser$.pipe(take(1)).subscribe(user => this.user = user);
    return this.user;
  }

  login(){
    this.accountService.login(this.model).subscribe(response => {
      this.getUser();
      this.router.navigateByUrl('/')
      this.toastr.success(`Welcome, ${this.user.username}`);
    }, error => {
      console.log(error);
    });
  }

  setCurrentUser(){
    this.user = JSON.parse(localStorage.getItem('user'));
    this.accountService.setCurrentUser(this.user);
  }
  logout(){
    this.accountService.logout();
    this.router.navigateByUrl('/');
    this.toastr.success('You have logged out!');
  }
}
