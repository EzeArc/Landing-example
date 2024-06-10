import { NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero-img',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './hero-img.component.html',
  styleUrl: './hero-img.component.css'
})
export class HeroImgComponent {

  @Input() title: string = '';
}
