import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ClientsModel } from '../../../../core/services/clients.model';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ClientsService } from '../../../../core/services/clients.service';
import { ListeClientsComponent } from '../liste-clients/liste-clients.component';

@Component({
  selector: 'app-ajout-client',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ListeClientsComponent
  ],
  templateUrl: './ajout-client.component.html',
  styleUrl: './ajout-client.component.scss'
})
export class AjoutClientComponent implements OnInit{
  @Input() clientModel!: ClientsModel; // récupère le modèle client sur lequel se baser pour l'ajouter en BDD
  
  @Output() closeDialog = new EventEmitter<void>(); // permet d'envoyer vers un autre component une information (ici c'est pour fermer la popup)

  addClientForm = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    address: new FormControl(''),
    mail: new FormControl(''),
    phone: new FormControl(''),
  });

  clients: ClientsModel[] = []; // La liste des clients affichée dans le composant.

  constructor(private clientService: ClientsService) {

  }

  ngOnInit(): void {
    
  }

  onSubmit(){
    if (this.addClientForm.valid) {
      this.clientService.addClient(this.addClientForm.value as ClientsModel).subscribe({        
        // next: (client) => console.log('Client ajouté', client),
        next: (response: ClientsModel) => {
          console.log('Client ajouté', response),
          this.updateClientList(response)
        },
        error: (error) => console.error('Erreur lors de l\'ajout du client', error)
      })
      this.closeDialog.emit(); // Fermer la dialog après la soumission
    }
  }

  // Méthode pour mettre à jour la liste des clients
  updateClientList(newClient: ClientsModel) {
    this.clients.push(newClient); // Supposant que `clients` est votre liste de clients affichée
    console.log("updateClientList" , newClient)
  }

}
