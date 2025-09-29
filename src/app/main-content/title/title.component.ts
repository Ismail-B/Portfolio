import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NavbarComponent } from '../../shared/navbar/navbar.component';

/* === Title Component === */
@Component({
  selector: 'app-title',
  standalone: true,
  imports: [CommonModule, TranslateModule, NavbarComponent],
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent {
  /* === Smooth Scroll to Section === */
  scrollToSection(sectionId: string): void {
    const el = document.getElementById(sectionId);
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
