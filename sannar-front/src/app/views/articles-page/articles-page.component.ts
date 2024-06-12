import { Component, OnInit, inject } from '@angular/core';
import { ArticleComponent } from '../../components/article/article.component';
import { ArticleService } from '../../service/article.service';
import { Article } from '../../models/article.model';
import { ArticleGridComponent } from '../../components/article-grid/article-grid.component';
import { HeroImgComponent } from '../../shared/hero-img/hero-img.component';
import { PaginationComponent } from '../../components/pagination/pagination.component';


@Component({
  selector: 'app-articles-page',
  standalone: true,
  imports: [ArticleComponent, ArticleGridComponent, HeroImgComponent, PaginationComponent],
  templateUrl: './articles-page.component.html',
  styleUrl: './articles-page.component.css'
})
export default class ArticlesPageComponent implements OnInit{

  title= "SANNAR BLOG";

  categories: string[] = [];
  articles: Article[] = [];
  filteredArticles: Article[] = [];
  currentCategory: string | null = null;
  

  private readonly articleService= inject(ArticleService)

  ngOnInit(): void {
    this.articleService.getCategories().subscribe(categories => {
      this.categories = categories;
    });
    this.articleService.getAllArticles().subscribe(articles => {
      this.articles = this.filteredArticles = articles;
    });
  }

  onCategorySelected(category: string): void {
    this.currentCategory = category;
    this.articleService.getArticlesByCategory(category).subscribe(articles => {
      this.filteredArticles = articles;
    });
  }

  // trackByArticles(index: number, article: Article): any {
  //   return article.titulo; // Utiliza el título como identificador único si es único
  // }

  // trackByCategory(index: number, category: string): any {
  //   return category; // La categoría misma puede ser el identificador único
  // }
}

