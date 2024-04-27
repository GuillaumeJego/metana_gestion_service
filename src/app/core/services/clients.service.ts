// import { HttpClient } from '@angular/common/http';
// import { Injectable, inject } from '@angular/core';
// import { Observable } from 'rxjs';
// import { ClientsModel } from './clients.model';

// @Injectable({
//   providedIn: 'root'
// })
// export class ClientsService {
//   API = 'http://localhost/metana_gestion_finances/metana_gestion_finances/API/clients.php';
//   private http = inject(HttpClient);

//   getClient(): Observable<ClientsModel[]> {
//     return this.http.get<ClientsModel[]>(this.API); // Effectue une requête GET à l'API et retourne un Observable
//   }

//   putClient(customer_id: number, clientsModel:ClientsModel){
//     return this.http.put<ClientsModel>(`this.API/${customer_id}`, clientsModel);
//   }

//   addClient(addClientVariable: ClientsModel){
//     return this.http.post<ClientsModel>(this.API, addClientVariable);
//   }
// }


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { ClientsModel } from './clients.model';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  private API = 'http://localhost/metana_gestion_finances/metana_gestion_finances/API/clients.php';
  private clientsSubject = new BehaviorSubject<ClientsModel[]>([]);

  constructor(private http: HttpClient) {
    // this.loadInitialClients();
    this.loadClients();
  }

  get clients(): Observable<ClientsModel[]> {
    return this.clientsSubject.asObservable();
  }

  // private loadInitialClients() {
  //   this.http.get<ClientsModel[]>(this.API).subscribe(
  //     clients => this.clientsSubject.next(clients),
  //     error => console.error('Error loading clients', error)
  //   );
  // }

  private loadClients() {
    this.http.get<ClientsModel[]>(this.API).subscribe(
      clients => this.clientsSubject.next(clients),
      error => console.error('Failed to load clients', error)
    );
  }

  addClient(client: ClientsModel): Observable<any> { // Changez le type de retour en any pour correspondre à la réponse de l'API
    return this.http.post<any>(this.API, client).pipe(
      tap(response => {
        if (response.status === 'success' && response.client) {
          const currentClients = this.clientsSubject.value;
          const newClientData = response.client; // Assurez-vous que ceci correspond à la structure de votre ClientsModel
          this.clientsSubject.next([...currentClients, newClientData]);
        } else {
          // Ici, vous pouvez gérer d'autres cas, par exemple si la réponse n'est pas un succès
          console.error('Erreur lors de l\'ajout du client:', response.message);
        }
      })
    );
  }
  

  putClient(customer_id: number, clientsModel: ClientsModel): Observable<ClientsModel> {
    return this.http.put<ClientsModel>(`${this.API}/${customer_id}`, clientsModel).pipe(
      tap(updatedClient => {
        const currentClients = this.clientsSubject.value;
        const index = currentClients.findIndex(client => client.customer_id === customer_id);
        currentClients[index] = updatedClient;
        this.clientsSubject.next([...currentClients]);
      })
    );
  }
}
