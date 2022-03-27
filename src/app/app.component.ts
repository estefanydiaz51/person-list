import { Component, OnInit } from '@angular/core';
import { LoggingService } from './LoggingService.service';
import { Persona } from './persona.model';
import { PersonasService } from './personas.service';
import * as firebase from 'firebase/compat/app';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  titulo = 'Listado de personas';

  constructor (
    private loginService: LoginService
  ) {
  }
  ngOnInit(): void {
    firebase.default.initializeApp({
      apiKey: "AIzaSyCcyB8h9RbeeAnqn5zrKv1sjuwpVdLRflg",
      authDomain: "listado-personas-ca4e1.firebaseapp.com",
    })
  }

  isAutenticado () {
    return this.loginService.isAutenticado();
  }

  salir () {
    return this.loginService.logout();
  }
}
