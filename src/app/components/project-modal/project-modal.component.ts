import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-modal.component.html',
  styleUrls: ['./project-modal.component.css']
})
export class ProjectModalComponent {

  @Input() project: any;   // ✅ IMPORTANT


  currentIndex = 0;

next() {
  if (this.currentIndex < this.project.image.length - 1) {
    this.currentIndex++;
  } else {
    this.currentIndex = 0;
  }
}

prev() {
  if (this.currentIndex > 0) {
    this.currentIndex--;
  } else {
    this.currentIndex = this.project.image.length - 1;
  }
}

  @Output() close = new EventEmitter<void>();
}