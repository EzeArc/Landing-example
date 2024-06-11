import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-article-details',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './article-details.component.html',
  styleUrl: './article-details.component.css'
})
export default class ArticleDetailsComponent {
@Input('id') articleId!: string;
}
