import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { AuthService } from '../../services/auth-service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  public user: User | undefined;

  constructor(private authService: AuthService) { }

  public ngOnInit(): void {
    this.authService.me().subscribe((user: User) => 
      { this.user = user;
      }
    )
  }

  public back() {
    window.history.back();
  }

}
