import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { Article, ArticlesResponse } from '../models/article.model';

@Injectable({ providedIn: 'root'})
export class ArticleService {
  private jsonUrl = 'assets/data/article.json'; // Asegúrate de que la ruta sea correcta

  private articlesCache: Article[] | null = null;
  private categoriesCache: string[] | null = null;

  private readonly http= inject(HttpClient)

  getCategories(): Observable<string[]> {
    if (this.categoriesCache) {
      return of(this.categoriesCache);
    }
    return this.http.get<ArticlesResponse>(this.jsonUrl).pipe(
      map(data => {
        const categories = Object.keys(data.ARTICULOS);
        this.categoriesCache = categories;
        return categories;
      })
    );
  }

  getAllArticles(): Observable<Article[]> {
    if (this.articlesCache) {
      return of(this.articlesCache);
    }
    return this.http.get<ArticlesResponse>(this.jsonUrl).pipe(
      map(data => {
        const articles = ([] as Article[]).concat(...Object.values(data.ARTICULOS));
        this.articlesCache = articles;
        return articles;
      })
    );
  }

  getArticlesByCategory(categoryKey: string): Observable<Article[]> {
    return this.http.get<ArticlesResponse>(this.jsonUrl).pipe(
      map(response => response.ARTICULOS[categoryKey] || [])
    );
  }

  getRecentArticles(): Observable<Article[]> {
    return this.getAllArticles().pipe(
      map(articles => articles.slice(-4)) // Obtén los últimos 4 artículos
    );
  }
}

