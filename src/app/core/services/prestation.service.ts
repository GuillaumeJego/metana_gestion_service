import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { PrestationModel } from './prestation.model';

@Injectable({
  providedIn: 'root'  // Ce décorateur indique que ce service peut être injecté dans n'importe quelle partie de l'application.
})
export class PrestationService {
  API = 'http://localhost/metana_gestion_finances/metana_gestion_finances/API/clients.php';
  private http = inject(HttpClient);
  // constructor(private http: HttpClient) { } // Injection du service HttpClient

  getPrestation(): Observable<any> {
    console.log("gesPrestation dans service");
    return this.http.get<PrestationModel[]>(this.API); // Effectue une requête GET à l'API et retourne un Observable
  }
}






