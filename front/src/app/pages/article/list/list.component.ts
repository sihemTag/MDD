import { Component, Input, OnInit } from '@angular/core';
import { Article } from 'src/app/interfaces/article';
import { ArticleService } from '../services/article.service';
import { MatDialog } from '@angular/material/dialog';
import { DetailComponent } from '../detail/detail.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  articles: Article[] = [];
  @Input() sortAscending: boolean = true;

  constructor(private articleService: ArticleService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.refreshArticles();
  }

  openArticleDetails(article: Article) {
    const dialogRef = this.dialog.open(DetailComponent, {
      width: '80%',
      maxHeight: '70%',
      data: article
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  sortArticles(): void {
    this.sortAscending = !this.sortAscending;
    this.articles.sort((a, b) => {
      const dateA = new Date(a.created_at).getTime();
      const dateB = new Date(b.created_at).getTime();
      return this.sortAscending ? dateA - dateB : dateB - dateA;
    });
  }

  ngOnChanges(): void {
    this.sortArticles();
  }

  public refreshArticles() {
     this.articleService.all().subscribe({
      next: (response) => {
        this.articles = response;
      },
      error: (err) => {
        console.error('Erreur lors du chargement des articles', err);
      }
    });
  }

}
