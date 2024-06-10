import { Component, OnInit } from '@angular/core';
import { ArticleComponent } from '../../components/article/article.component';
import { ArticleService } from '../../service/article.service';


@Component({
  selector: 'app-articles-page',
  standalone: true,
  imports: [ArticleComponent],
  templateUrl: './articles-page.component.html',
  styleUrl: './articles-page.component.css'
})
export default class ArticlesPageComponent implements OnInit{

  categories: string[] = [];
  articles: any[] = [];

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
    this.articleService.getCategories().subscribe(data => {
      this.categories = data;
    });
  
    this.articleService.getAllArticles().subscribe(data => {
      this.articles = data;
    });
  }

}
