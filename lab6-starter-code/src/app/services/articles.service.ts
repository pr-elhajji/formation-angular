import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError, tap, filter } from 'rxjs/operators';

import {Article} from '../model/article';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  // URL for CRUD operations
  apiUrl = 'http://localhost:3000/articles';

  // inject HttpClient to get Http instance
  constructor(private http: HttpClient) { }

  // Fetch all articles
  getAllArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(this.apiUrl).pipe(
      tap(articles => console.log('Nombre article:'  + articles.length)),
        catchError(this.handleError)
      );
  }
  // récupérer un article by id
  getArticleById(articleId: number): Observable<Article> {
    return this.http.get<Article>( this.apiUrl + '/' + articleId).pipe(
        tap(article => console.log(article.title + '' + article.title)),
        catchError(this.handleError)
    );
  }

  // get last ID
  getLastId(): Observable <number> {
    return this.http.get<Article[]>(this.apiUrl).pipe(
      map( articles => articles.length),
      catchError(this.handleError)
      );
  }
  // ajouter un article
  createArticle(article: Article): Observable<Article> {
    return this.http.post<Article>(this.apiUrl , article).pipe(
           catchError(this.handleError)
    );
  }

  // Update un article
  updateArticle(article: Article): Observable<number> {
    const httpHeaders = new HttpHeaders({
        'Content-Type': 'application/json'
    });
    return this.http.put<Article>(this.apiUrl + '/' + article.id, article, {
        headers: httpHeaders,
        observe: 'response'
    }
    ).pipe(
        map(res => res.status),
        catchError(this.handleError)
    );
  }
  // supprimer un article
  deleteArticleById(articleId: number): Observable<number> {
    return this.http.delete<number>(this.apiUrl + '/' + articleId).pipe(
      tap(status => console.log('status: ' + status)),
      catchError(this.handleError)
      );
    }


  private handleError(error: any) {
      console.error(error);
      return throwError(error);
  }

}


