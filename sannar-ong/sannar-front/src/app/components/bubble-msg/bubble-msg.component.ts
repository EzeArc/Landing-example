import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bubble-msg',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bubble-msg.component.html',
  styleUrl: './bubble-msg.component.css'
})
export class BubbleMsgComponent implements OnInit {
  isVisible: boolean = false;

  constructor() {}

  ngOnInit(): void {
    // Lógica para mostrar la burbuja
    setTimeout(() => {
      document.querySelector('.bubble-msg')?.classList.add('show');
    }, 1000); // Ajusta el tiempo según sea necesario
  }
}
