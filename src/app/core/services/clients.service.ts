import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ClientsModel } from './clients.model';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  API = 'http://localhost/metana_gestion_finances/metana_gestion_finances/API/clients.php';
  private http = inject(HttpClient);

  getClient(): Observable<ClientsModel[]> {
    return this.http.get<ClientsModel[]>(this.API); // Effectue une requête GET à l'API et retourne un Observable
  }

  putClient(customer_id: number, clientsModel:ClientsModel){
    return this.http.put<ClientsModel>(`this.API/${customer_id}`, clientsModel);
  }

  addClient(clientsModel: ClientsModel){
    return this.http.post<ClientsModel>(this.API, clientsModel);
  }
}





