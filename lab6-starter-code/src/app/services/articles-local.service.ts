/*import { Injectable } from '@angular/core';
import {Article} from '../model/article';
import { plainToClass } from 'class-transformer'; // voir https://github.com/typestack/class-transformer

import { ARTICLES } from '../mock-articles';

@Injectable({
  providedIn: 'root'
})
export class ArticlesLocalService {

  articles: Article[];   // array pour stock les articles

  constructor() {
    this.articles = plainToClass(Article, ARTICLES); // to convert article plain object a array article
    console.log(this.articles);
  }
  get Articles(): Array<Article>{
        return this.articles;
  }
  getArticle(id: number): Article {
    const articles = this.articles.filter((ele) => ele.id === id );
    if (articles.length === 1) {
      return articles[0];
    }
    else {
      return null;
    }
  }


}
*/
