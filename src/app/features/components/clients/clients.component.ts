import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListeClientsComponent } from './liste-clients/liste-clients.component';
import { ModificationClientsComponent } from './modification-clients/modification-clients.component';
import { AjoutClientComponent } from './ajout-client/ajout-client.component';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [
    CommonModule,
    ListeClientsComponent,
    ModificationClientsComponent,
    AjoutClientComponent
  ],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.scss'
})
export class ClientsComponent {

}
