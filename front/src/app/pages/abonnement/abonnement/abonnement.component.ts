import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AbonnementService } from '../abonnement.service';
import { Abonnement } from 'src/app/interfaces/abonnement';
import { ThemeService } from '../../theme/theme.service';
import { Theme } from 'src/app/interfaces/theme';

@Component({
  selector: 'app-abonnement',
  templateUrl: './abonnement.component.html',
  styleUrls: ['./abonnement.component.scss']
})
export class AbonnementComponent implements OnInit {
  abonnements: Abonnement[] = [];
  themes: Theme[] = [];

  constructor(private abonnementService: AbonnementService, private themeService: ThemeService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.abonnementService.all().subscribe({
      next: (res) => {
        this.abonnements = res;
        this.themes = res.map(abonnement => abonnement.theme);
      },
      error: (err) => console.error('Erreur récupération abonnements', err)
    });
  }

  unsubscribe(themeId: number): void {
    this.abonnementService.unsubscribe(themeId).subscribe(
      () => {
        this.themes = this.themes.filter(theme => theme.id !== themeId);
      },
      (error) => {
        console.error('Erreur lors du désabonnement', error);
      }
    );

    setTimeout(() => {
      this.cdr.detectChanges();
    })
  }

}
