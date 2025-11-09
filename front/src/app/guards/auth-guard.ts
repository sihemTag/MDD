import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { SessionService } from "../services/sessionService";
import { Observable, take, tap } from "rxjs";

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {

  constructor( 
    private router: Router,
    private sessionService: SessionService,
  ) {
  }

  canActivate(): Observable<boolean> {
    return this.sessionService.$isLogged().pipe(
      take(1),
      tap((loggedIn) => {
        if (!loggedIn) {
          this.router.navigate(['login']);
        }
      })
    );
  }
}