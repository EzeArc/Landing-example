import { Component, inject, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ArticleService } from '../../service/article.service';
import { Article } from '../../models/article.model';

@Component({
  selector: 'app-article-grid',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './article-grid.component.html',
  styleUrl: './article-grid.component.css'
})
export class ArticleGridComponent implements OnInit {
  recentArticles: Article[] = [];

  private readonly articleService= inject(ArticleService)

  ngOnInit(): void {
      // Llama al método getRecentArticles() aquí
      this.articleService.getRecentArticles().subscribe(recentArticle => {
        this.recentArticles = recentArticle
    });
  }
}
