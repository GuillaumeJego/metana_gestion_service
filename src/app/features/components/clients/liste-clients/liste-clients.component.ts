import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ClientsService } from '../../../../core/services/clients.service';
import { ClientsModel } from '../../../../core/services/clients.model';
import { ModificationClientsComponent } from '../modification-clients/modification-clients.component';

@Component({
  selector: 'app-liste-clients',
  standalone: true,
  imports: [
    CommonModule,
    ModificationClientsComponent
  ],
  templateUrl: './liste-clients.component.html',
  styleUrl: './liste-clients.component.scss'
})
export class ListeClientsComponent {
  showDialog = false;
  clientsModel!: ClientsModel;
  private clientsService = inject(ClientsService);
  readonly clients = this.clientsService.getClient();


  toggleDialog(client: ClientsModel){
    this.showDialog = !this.showDialog;
    this.clientsModel = client
    console.log(this.showDialog)
    console.log(this.clientsModel)
  }
}
