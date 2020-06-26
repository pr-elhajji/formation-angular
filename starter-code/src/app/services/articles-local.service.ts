import { Injectable } from '@angular/core';
import {Article} from '../model/article';
import { plainToClass } from 'class-transformer'; // voir https://github.com/typestack/class-transformer

import { ARTICLES } from '../mock-articles';

//TODO
export class ArticlesLocalService {
  articles: Article[];
  constructor() {
    // TO DO
  }
  get Articles(): Array<Article>{
    return this.articles;
  }
  getArticle(id: number): Article {
    // TO-DO
  }


}
