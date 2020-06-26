import { Component, OnInit , Input} from '@angular/core';

import { Article } from '../model/article';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  article: Article;  // TODO: décoration de l'attribut article pour qu'il soit une input
  commentaire: Comment;

  constructor() { }

  ngOnInit(): void {
  }

}
