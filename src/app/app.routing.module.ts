import { NgModule } from '@angular/core';

import { MonitoramentoComponent } from './components/monitoramento/monitoramento.component';
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './guards/auth-guard.service';

import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const appRoutes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'login', component: LoginComponent },
    {
        path: 'home', component: HomeComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'monitoramento', component: MonitoramentoComponent }
        ]
    },
    { path: '**', redirectTo: 'home' }
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }