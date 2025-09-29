import { Component } from '@angular/core';
import { NgFor, NgClass } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

/* === Reference Model === */
interface Reference {
  textKey: string;
  authorKey: string;
}

/* === References Component === */
@Component({
  selector: 'app-references',
  standalone: true,
  imports: [NgFor, NgClass, TranslateModule],
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.scss']
})
export class ReferencesComponent {
  /* === Data === */
  references: Reference[] = [
    { textKey: 'REFERENCES.REF1.TEXT', authorKey: 'REFERENCES.REF1.AUTHOR' },
    { textKey: 'REFERENCES.REF2.TEXT', authorKey: 'REFERENCES.REF2.AUTHOR' },
    { textKey: 'REFERENCES.REF3.TEXT', authorKey: 'REFERENCES.REF3.AUTHOR' }
  ];

  currentIndex = 0;

  /* === Navigation Methods === */
  prev(): void {
    this.currentIndex =
      (this.currentIndex - 1 + this.references.length) % this.references.length;
  }

  next(): void {
    this.currentIndex = (this.currentIndex + 1) % this.references.length;
  }

  goTo(index: number): void {
    this.currentIndex = index;
  }

  /* === State Helpers === */
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
