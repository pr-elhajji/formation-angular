/**
 * la classe article
 */
import {Comment} from './comments';

export interface IArticle{
  id?: number;
  title: string;
  imgurl?: string;
  content: string;
  ListComments: Comment [];
}

export class Article implements IArticle{
  id: number;
  title: string;
  imgurl: string;
  content: string;
  ListComments: Comment [];
  constructor(){

  }
  addComment(com: Comment){
    //TODO
  }
}
