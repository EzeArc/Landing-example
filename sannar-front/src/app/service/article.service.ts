import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private jsonUrl = 'assets/data/article.json'; // Asegúrate de que la ruta sea correcta

  constructor(private http: HttpClient) { }

  getCategories(): Observable<string[]> {
    return this.http.get<any>(this.jsonUrl).pipe(
      map(data => Object.keys(data.ARTICULOS))
    );
  }

  getAllArticles(): Observable<any[]> {
    return this.http.get<any>(this.jsonUrl).pipe(
      map(data => {
        const articles = [];
        for (const category of Object.keys(data.ARTICULOS)) {
          articles.push(...data.ARTICULOS[category]);
        }
        return articles;
      })
    );
  }

}
