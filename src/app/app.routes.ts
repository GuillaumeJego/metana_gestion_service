import { RouterModule, Routes } from '@angular/router';;
import { NgModule } from '@angular/core';
import { DashboardComponent } from './features/components/dashboard/dashboard.component';
import { PrestationsComponent } from './features/components/prestations/prestations.component';
import { ClientsComponent } from './features/components/clients/clients.component';

export const routes: Routes = [
    {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    {path: 'dashboard', component: DashboardComponent },
    {path: 'prestations', component: PrestationsComponent},
    {path: 'clients', component: ClientsComponent},
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
