import { Injectable } from "@angular/core";
import { AuthService } from "../pages/auth/services/auth-service";
import { SessionService } from "./sessionService";

@Injectable({ providedIn: 'root' })
export class AuthInitService {
  constructor(private authService: AuthService, private sessionService: SessionService) {}

  init(): Promise<void> {
    const token = localStorage.getItem('token');
    if (token) {
      return this.authService.me().toPromise().then(
        (user) => {
            if(user){
                this.sessionService.logIn(user);
            }       
        },
        () => {
          this.sessionService.logOut();
        }
      );
    }
    return Promise.resolve();
  }
}
