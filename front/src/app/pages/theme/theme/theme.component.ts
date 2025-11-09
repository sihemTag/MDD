import { Component, OnInit } from '@angular/core';
import { Theme } from 'src/app/interfaces/theme';
import { ThemeService } from '../theme.service';
import { AbonnementService } from '../../abonnement/abonnement.service';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss']
})
export class ThemeComponent implements OnInit {
  themes: Theme[] = [];
  subscriptions: { [key: number]: boolean } = {};

  constructor(private themeService:ThemeService, private abonnementService: AbonnementService) { }

  ngOnInit(): void {
    this.themeService.getAllThemes().subscribe({
      next: (res) =>{
        this.themes= res;

        this.themes.forEach(theme => {
          this.checkSubscription(theme.id);
        });
      }
    });

  }

  checkSubscription(themeId: number): void {
    this.abonnementService.isSubscribed(themeId).subscribe(
      (isSubscribed) => {
        this.subscriptions[themeId] = isSubscribed;
      },
      (error) => {
        console.error('Erreur lors de la vérification de l\'abonnement', error);
      }
    );
  }

  subscribe(themeId: number): void {
    this.abonnementService.subscribe(themeId).subscribe(
      () => {
        this.subscriptions[themeId] = true;
      },
      (error) => {
        console.error('Erreur lors de l\'abonnement', error);
      }
    );
  }

  isUserSubscribed(themeId: number): boolean {
    return this.subscriptions[themeId] ?? false;
  }

}
