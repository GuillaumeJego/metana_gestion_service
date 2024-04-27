import { Component, Input, OnInit, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsModel } from '../../../../core/services/clients.model';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ClientsService } from '../../../../core/services/clients.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-modification-clients',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './modification-clients.component.html',
  styleUrl: './modification-clients.component.scss'
})
export class ModificationClientsComponent implements OnInit {
  @Input() clientsModel!: ClientsModel; //va récupérer le model des clients attendu
  private clientsService = inject(ClientsService); 
  editResultClient! : Observable<ClientsModel> // va observer la modification du client avant envoie

  editClientForm = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    address: new FormControl(''),
    mail: new FormControl(''),
    phone: new FormControl(''),
  })

  ngOnInit(): void {
    this.editClientForm.patchValue(this.clientsModel)
  }

  onSubmit(){
    const clientsModel:ClientsModel = {
      customer_id: this.clientsModel.customer_id,
      firstname: this.clientsModel.firstname,
      lastname: this.clientsModel.lastname,
      address: this.clientsModel.address,
      mail: this.clientsModel.mail,
      phone: this.clientsModel.phone,
    }
    this.editResultClient = this.clientsService.putClient(clientsModel.customer_id, clientsModel)
  }

}
