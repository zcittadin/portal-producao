import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from '../dashboard/dashboard.component';
import { MonitoramentoComponent } from '../monitoramento/monitoramento.component';

const homeRoutes: Routes = [
    {
        path: 'home', component: HomeComponent,
        outlet: 'principal',
        children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'monitoramento', component: MonitoramentoComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(homeRoutes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }