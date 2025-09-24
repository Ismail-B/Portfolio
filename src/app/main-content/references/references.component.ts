import { Component } from '@angular/core';
import { NgFor, NgClass } from '@angular/common';

interface Reference {
  text: string;
  author: string;
}

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [NgFor, NgClass],
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.scss']
})
export class ReferencesComponent {
  references: Reference[] = [
    {
      text: 'Lukas has proven to be a reliable group partner. His technical skills and proactive approach were crucial to the success of our project.',
      author: 'H.Janisch – Team Partner'
    },
    {
      text: 'I had the good fortune of working with Lukas on a project at the Developer Akademie. He always stayed calm, knowledgeable, and easy to work with.',
      author: 'T.Schulz – Frontend Developer'
    },
    {
      text: 'Working with Lukas was inspiring. His structured way of thinking helped our team to stay focused and efficient.',
      author: 'M.Müller – Fullstack Developer'
    }
  ];

  currentIndex = 0;

  prev(): void {
    this.currentIndex =
      (this.currentIndex - 1 + this.references.length) %
      this.references.length;
  }

  next(): void {
    this.currentIndex = (this.currentIndex + 1) % this.references.length;
  }

  goTo(index: number): void {
    this.currentIndex = index;
  }

  isActive(i: number): boolean {
    return i === this.currentIndex;
  }

  isLeft(i: number): boolean {
    return i === (this.currentIndex - 1 + this.references.length) % this.references.length;
  }

  isRight(i: number): boolean {
    return i === (this.currentIndex + 1) % this.references.length;
  }
}
