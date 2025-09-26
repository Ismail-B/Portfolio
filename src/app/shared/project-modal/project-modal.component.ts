import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-modal.component.html',
  styleUrls: ['./project-modal.component.scss']
})
export class ProjectModalComponent {
  @Input() project: any;
  @Input() projectList: any[] = [];
  @Input() currentIndex!: number;
  @Output() close = new EventEmitter<void>();
  @Output() updateIndex = new EventEmitter<number>();

  onBackdropClick() {
    this.close.emit();
  }

  nextProject() {
    const nextIndex = (this.currentIndex + 1) % this.projectList.length;
    this.updateIndex.emit(nextIndex);
  }
}
