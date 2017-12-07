import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../auth/auth.service';
import { error } from 'selenium-webdriver';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  emailMsg: any = [];
  passMsg: any = [];

  user: any = {
    email: '',
    password: ''
  }

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
  }

  login() {
    this.emailMsg = [];
    this.passMsg = [];
    this.authService.login(this.user.email, this.user.password).then(invalid => {
      console.log(invalid);
      if (invalid === 'auth/wrong-password') {
        this.passMsg.push({ severity: 'error', summary: 'Password inválida!', detail: '' });
      }
      if (invalid === 'auth/user-not-found') {
        this.emailMsg.push({ severity: 'error', summary: 'Email inválido!', detail: '' });
      }
    }).catch(error => {
      console.log(error);
    });
  }

  cadastrarUsuario() {

  }

}
