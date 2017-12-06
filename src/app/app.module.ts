import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
//import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';

import { CheckboxModule, SidebarModule, MessagesModule, MessageModule } from 'primeng/primeng';

import { environment } from './../environments/environment';

import { AppRoutingModule, appRoutes } from './app.routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

import { AuthService } from './auth/auth.service';
import { AuthGuard } from './guards/auth-guard.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    CheckboxModule,
    SidebarModule,
    MessagesModule,
    MessageModule,
    AppRoutingModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseconfig),
  ],
  providers: [AuthService, AngularFireAuth, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

