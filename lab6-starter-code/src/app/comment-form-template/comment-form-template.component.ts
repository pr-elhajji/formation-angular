import { Component, OnInit , Input} from '@angular/core';

import { Article } from '../model/article';
import { Comment } from '../model/comments';

import {ArticlesService} from '../services/articles.service'; // importer le service

@Component({
  selector: 'app-comment-form-template',
  templateUrl: './comment-form-template.component.html',
  styleUrls: ['./comment-form-template.component.css']
})

//
export class CommentFormTemplateComponent implements OnInit {

  @Input() article: Article;
  commentaire: Comment = new Comment('' , '') ;
  statusCode: number;
  constructor(public articleService: ArticlesService) { }

  ngOnInit(): void {

  }

  addComment(){
    // TODO
  }

}
