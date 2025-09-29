import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-project-modal',
  standalone: true,
  imports: [CommonModule, TranslateModule],
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
