import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

/* 🔹 Project modal component */
@Component({
  selector: 'app-project-modal',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './project-modal.component.html',
  styleUrls: ['./project-modal.component.scss']
})
export class ProjectModalComponent {
  /* 🔹 Input data from parent */
  @Input() project: any;
  @Input() projectList: any[] = [];
  @Input() currentIndex!: number;

  /* 🔹 Output events for parent */
  @Output() close = new EventEmitter<void>();
  @Output() updateIndex = new EventEmitter<number>();

  /* 🔹 Close modal when clicking backdrop */
  onBackdropClick() {
    this.close.emit();
  }

  /* 🔹 Go to next project */
  nextProject() {
    const nextIndex = (this.currentIndex + 1) % this.projectList.length;
    this.updateIndex.emit(nextIndex);
  }
}
