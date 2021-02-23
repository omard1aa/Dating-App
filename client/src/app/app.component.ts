import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AccountService } from './services/account.service';
import { User } from './_models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = "Dating App"

  constructor() { }

  ngOnInit(): void {
  }

  getUsername(){
    return localStorage.length > 0 ? true : false
  }
}
