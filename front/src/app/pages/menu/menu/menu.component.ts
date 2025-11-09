import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/services/sessionService';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Input() showElements: boolean = false;

  constructor(private router:Router, private sessionService: SessionService) { }

  ngOnInit(): void {
  }

  goToAccount() {
    this.router.navigate(['/account']);
  }

  goToThemes(){
    this.router.navigate(['/themes']);
  }

  goToArticles(){
    this.router.navigate(['/articles']);
  }

  logout(): void {
    this.sessionService.logOut();
    this.router.navigate(['/']);
  }

}
