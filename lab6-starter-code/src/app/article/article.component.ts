import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // la récupération des paramétre de url

import {ArticlesService} from '../services/articles.service'; // importer le service
import { Article } from '../model/article';
import { CommentsComponent } from '../comments/comments.component';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})

export class ArticleComponent implements OnInit {

  statusCode: number;
  article: Article;

  constructor(public articleService: ArticlesService, private route: ActivatedRoute) {
   }

  ngOnInit(): void {
    // récupérer l'article à partir des paramètres de lien
    this.getArticle();
  }
  getArticle(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.articleService.getArticleById(id).subscribe(
      data => {
        this.article = data;
      },
      error => this.statusCode = error
    );
  }
}
