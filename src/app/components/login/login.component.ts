import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../auth/auth.service';
import { error } from 'selenium-webdriver';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  msgs: any = [];

  user: any = {
    email: '',
    password: ''
  }

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.user.email, this.user.password).then(invalid => {
      if (invalid)
        this.msgs.push({ severity: 'error', summary: 'Atenção!', detail: invalid });
    }).catch(error => {
      console.log(error);
    });
  }

  cadastrarUsuario() {

  }

}
