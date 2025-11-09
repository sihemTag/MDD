import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Abonnement } from "src/app/interfaces/abonnement";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
  })
  export class AbonnementService {
  
    constructor(private httpClient: HttpClient) { }

    public all(): Observable<Abonnement[]> {
        return this.httpClient.get<Abonnement[]>(`${environment.baseUrl}/abonnements`);
    }
      
    public subscribe(themeId: number): Observable<void> {
        return this.httpClient.post<void>(`${environment.baseUrl}/abonnements/${themeId}`, {});
    }
    
    public unsubscribe(themeId: number): Observable<void> {
        return this.httpClient.delete<void>(`${environment.baseUrl}/abonnements/${themeId}`);
    }

    public isSubscribed(themeId: number): Observable<boolean> {
        return this.httpClient.get<boolean>(`${environment.baseUrl}/abonnements/${themeId}`);
      }
      
  }