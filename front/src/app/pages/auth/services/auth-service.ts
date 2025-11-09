import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthSuccess } from '../interfaces/auth-success';
import { RegisterRequest } from '../interfaces/registerRequest';
import { LoginRequest } from '../interfaces/loginRequest';
import { User } from 'src/app/interfaces/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  public register(registerRequest: RegisterRequest): Observable<AuthSuccess> {
    return this.httpClient.post<AuthSuccess>(`${environment.baseUrl}/auth/register`, registerRequest);
  }

  public login(loginRequest: LoginRequest): Observable<AuthSuccess> {
    return this.httpClient.post<AuthSuccess>(`${environment.baseUrl}/auth/login`, loginRequest);
  }

  public me(): Observable<User> {
    return this.httpClient.get<User>(`${environment.baseUrl}/auth/me`);
  }
}