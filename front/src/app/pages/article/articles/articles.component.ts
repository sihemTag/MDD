import { Component, OnInit, ViewChild } from '@angular/core';
import { ArticleService } from '../services/article.service';
import { Article } from 'src/app/interfaces/article';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  showArticleForm = false;
  articles: Article[]= [];
  sortAscending = true;
  @ViewChild('list') listComponent!: ListComponent;

  constructor(private articleService:ArticleService) { }

  ngOnInit(): void {
    this.loadArticles();
  }

  openArticleForm() {
   this.showArticleForm = true;
  }

  closeArticleForm() {
    this.showArticleForm = false;
    this.listComponent.refreshArticles();
  }

  loadArticles() {
    this.articleService.all().subscribe(
      (response) => {
        this.articles = response;
      },
      (error) => {
        console.error('Erreur lors de la récupération des articles:', error);
      }
    );
  }

  toggleSort() {
    this.sortAscending = !this.sortAscending;
  }
  

}
