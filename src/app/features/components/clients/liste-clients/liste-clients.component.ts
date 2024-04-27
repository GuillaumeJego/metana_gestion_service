import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
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
export class ListeClientsComponent implements OnInit{
  showDialog = false;
  clients: ClientsModel[] = [];
  clientsModel!: ClientsModel;

  constructor(
    private clientsService: ClientsService,
    private cd: ChangeDetectorRef,
  ){

  };

  ngOnInit(): void {
    this.clientsService.clients.subscribe(clients => {
      this.clients = clients;
      this.cd.detectChanges(); // Déclenche la détection de changements
      this.sortClientsLastname() // retrie dans l'ordre alphabétique
    });
  };

  toggleDialog(client: ClientsModel){
    this.showDialog = !this.showDialog;
    this.clientsModel = client
    console.log(this.showDialog)
    console.log(this.clientsModel)
  }

  sortClientsLastname(): void {
    this.clients.sort((a, b) => a.lastname.localeCompare(b.lastname));
  }

}
