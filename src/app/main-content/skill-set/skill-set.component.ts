import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

/* === Skill Set Component === */
@Component({
  selector: 'app-skill-set',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './skill-set.component.html',
  styleUrls: ['./skill-set.component.scss']
})
export class SkillSetComponent {
  /* === Smooth Scroll to Section === */
  scrollToSection(sectionId: string): void {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}
