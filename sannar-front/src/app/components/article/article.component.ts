import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent {

  @Input({required: true}) title!: string;
  @Input({required: true}) image!: string;
  @Input({required: true}) resume!: string;
  @Input({required: true}) tags!: string;
}
