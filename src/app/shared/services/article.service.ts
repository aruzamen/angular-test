import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

const ARTICLES_URL = `http://localhost:3000/posts`;

@Injectable()
export class ArticleService {

  // Dependency Injection
  constructor(private httpClient: HttpClient) { }

  getArticles(): Observable<any> {
    return this.httpClient.get(`${ARTICLES_URL}`);
  }

  getArticle(articleId: number): Observable<any> {
    return this.httpClient.get(`${ARTICLES_URL}/${articleId}`);
  }

  updateArticle(articleId: number, article: any): Observable<any> {
    return this.httpClient.put(`${ARTICLES_URL}/${articleId}`, article);
  }
  createArticle(article: any): Observable<any> {
    return this.httpClient.post(`${ARTICLES_URL}`, article);
  }
}
