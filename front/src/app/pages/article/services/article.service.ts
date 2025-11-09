import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Article } from "src/app/interfaces/article";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
  })
  export class ArticleService {
  
    constructor(private httpClient: HttpClient) { }
  
    public all(): Observable<Article[]> {
      return this.httpClient.get<Article[]>(`${environment.baseUrl}/articles`);
    }
  
    public detail(id: string): Observable<Article> {
      return this.httpClient.get<Article>(`${environment.baseUrl}/articles/${id}`);
    }
  
    public create(form: FormData): Observable<Article> {
      return this.httpClient.post<Article>(`${environment.baseUrl}/articles`, form);
    }
  
    public update(id: string, form: FormData): Observable<Article> {
      return this.httpClient.put<Article>(`${environment.baseUrl}/articles/${id}`, form);
    }

  }