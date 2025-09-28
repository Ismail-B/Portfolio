import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar.component';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './title.component.html',
  styleUrl: './title.component.scss'
})
export class TitleComponent {
  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
