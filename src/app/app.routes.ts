import { RouterModule, Routes } from '@angular/router';;
import { NgModule } from '@angular/core';
import { DashboardComponent } from './features/components/dashboard/dashboard.component';
import { PrestationsComponent } from './features/components/prestations/prestations.component';

export const routes: Routes = [
    {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    {path: 'dashboard', component: DashboardComponent },
    {path: 'prestations', component: PrestationsComponent},
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
