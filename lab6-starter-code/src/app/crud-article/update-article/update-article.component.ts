import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import {Article} from '../../model/article'; // notre model
import {ArticlesService} from '../../services/articles.service'; // importer le service

@Component({
  selector: 'app-update-article',
  templateUrl: './update-article.component.html',
  styleUrls: ['./update-article.component.css']
})
export class UpdateArticleComponent implements OnInit {

  article: Article;
  statusCode: number;
  constructor(public articleService: ArticlesService, private route: ActivatedRoute ,  private router: Router) { }

  ngOnInit(): void {
    // récupérer l'article à partir des paramètres de lien
    this.getArticle();
  }
  getArticle(): void {
    // TODO
  }
  UpdateArticle(){
    // TODO
  }


}
