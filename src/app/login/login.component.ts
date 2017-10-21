import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Login } from '../shared/model/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: Login = {};

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onLogin(event: any) {
    console.log("login click");
    this.router.navigate(['stories']);
  }

}
