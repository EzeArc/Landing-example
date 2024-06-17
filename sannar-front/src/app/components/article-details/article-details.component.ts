import { Component, inject, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ArticleService } from '../../service/article.service';
import { Article } from '../../models/article.model';
import { HeroImgComponent } from '../../shared/hero-img/hero-img.component';
import { ArticleComponent } from '../article/article.component';

@Component({
  selector: 'app-article-details',
  standalone: true,
  imports: [RouterLink, HeroImgComponent, ArticleComponent],
  templateUrl: './article-details.component.html',
  styleUrl: './article-details.component.css'
})
export default class ArticleDetailsComponent implements OnInit{
@Input('id') articleId!: string;
article!: Article;
recentArticles: Article[] = [];

private readonly articleService= inject(ArticleService)

ngOnInit(){
  this.articleService.getArticleById(this.articleId).subscribe({
    next: (article) => {
      if (article) {
        this.article = article;
      }
    }
  });

  this.articleService.getRecentArticles().subscribe(recentArticle => {
    this.recentArticles = recentArticle
});
}

}
