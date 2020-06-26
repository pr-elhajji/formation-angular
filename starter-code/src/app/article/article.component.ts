import { Component, OnInit } from '@angular/core';
 //TODO: Importer la récupération des paramétre de url

// TODO importer le service
//TODO: import Article

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})

export class ArticleComponent implements OnInit {

  article: Article;

  constructor(public apiService: ArticlesLocalService, private route: ActivatedRoute) {
    // TODO: Injecter le service:ArticlesLocalService) et route:ActivatedRoute
  }

  ngOnInit(): void {
    // TO-DO Récupérer l'article à partir des paramètres de lien

  }
  getArticle(): void {
    //TODO
  }
}
