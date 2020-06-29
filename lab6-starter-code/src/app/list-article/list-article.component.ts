import { Component, OnInit } from '@angular/core';

import {Article} from '../model/article'; // notre model
import {ArticlesService} from '../services/articles.service'; // importer le service
import { Router } from '@angular/router';


@Component({
  selector: 'app-list-article',
  templateUrl: './list-article.component.html',
  styleUrls: ['./list-article.component.css']
})
export class ListArticleComponent implements OnInit {

  articles: Article [];
  statusCode: number;

  constructor(public articleService: ArticlesService, private router: Router) { } // Dependency Injection de service articles

  ngOnInit(): void {
    // récupération des valeurs des articles
    this.getAllArticles();
  }

  getAllArticles(){
    this.articleService.getAllArticles()
    .subscribe(
      data => {
        this.articles = data;
        console.log(data.length);
      },
      error => this.statusCode = error);
  }
  deleteArticle(id: number){
    this.articleService.deleteArticleById(id).subscribe(successCode => {
      // this.statusCode = successCode;
      // Expecting success code 204 from server
      this.statusCode = 204;
      this.ngOnInit();
    },
      errorCode => this.statusCode = errorCode);
  }
  updateArticle(id: number){
    this.router.navigate(['article/update/' + id]);
  }
}
