import { Component, OnInit } from '@angular/core';

// TODO importer le modele (Article) et le service (ArticlesLocalService)


@Component({
  selector: 'app-list-article',
  templateUrl: './list-article.component.html',
  styleUrls: ['./list-article.component.css']
})
export class ListArticleComponent implements OnInit {

  articles: Article [];
  constructor() {
    // TODO : Dependency Injection de service articles
  }

  ngOnInit(): void {
    // récupération des valeurs
    this.articles = this.apiService.Articles;
  }

}
