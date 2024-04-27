import { Component, Input, OnInit, inject } from '@angular/core';
import { ClientsModel } from '../../../../core/services/clients.model';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ClientsService } from '../../../../core/services/clients.service';

@Component({
  selector: 'app-ajout-client',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './ajout-client.component.html',
  styleUrl: './ajout-client.component.scss'
})
export class AjoutClientComponent implements OnInit{
  @Input() clientModel!: ClientsModel; // récupère le modèle client sur lequel se baser pour l'ajouter en BDD
  private clientService = inject(ClientsService); //

  addClientForm = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    address: new FormControl(''),
    mail: new FormControl(''),
    phone: new FormControl(''),
  })

  ngOnInit(): void {
    
  }

  onSubmit(){
    if (this.addClientForm.valid) {
      this.clientService.addClient(this.addClientForm.value as ClientsModel).subscribe({        
        next: (client) => console.log('Client ajouté', client),
        error: (error) => console.error('Erreur lors de l\'ajout du client', error)
      })
    }
  }

}
