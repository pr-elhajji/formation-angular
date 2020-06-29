import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {Article} from '../../model/article'; // notre model
import {ArticlesService} from '../../services/articles.service'; // importer le service

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {

  article: Article;
  statusCode: number;
  constructor(public articleService: ArticlesService,  private router: Router) { }

  ngOnInit(): void {
    this.article = new Article();
    // 1) récupérer le dernier ID puis incrémenté
    this.articleService.getLastId().subscribe(
      data => this.article.id = data + 1
    );
  }
  addArticle(){

    // TODO
  }

}
