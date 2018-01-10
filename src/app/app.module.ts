import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';

import { CheckboxModule, SidebarModule, MessagesModule, MessageModule, ChartModule } from 'primeng/primeng';

import { environment } from './../environments/environment';

import { ProducaoService } from './services/producao.service';

import { AppRoutingModule } from './app.routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MonitoramentoComponent } from './components/monitoramento/monitoramento.component';

import { AuthService } from './auth/auth.service';
import { AuthGuard } from './guards/auth-guard.service';
import { ConsultasComponent } from './components/consultas/consultas.component';
import { RelatoriosComponent } from './components/relatorios/relatorios.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SidebarComponent,
    DashboardComponent,
    MonitoramentoComponent,
    ConsultasComponent,
    RelatoriosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    CheckboxModule,
    SidebarModule,
    MessagesModule,
    MessageModule,
    ChartModule,
    AppRoutingModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseconfig),
  ],
  providers: [AuthService, AngularFireAuth, AuthGuard, ProducaoService],
  bootstrap: [AppComponent]
})
export class AppModule { }

