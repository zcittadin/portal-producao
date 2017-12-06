import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './guards/auth-guard.service';

import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';

export const appRoutes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    { path: '**', redirectTo: 'home' }
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }