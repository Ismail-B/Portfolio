import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ProjectModalComponent } from '../../shared/project-modal/project-modal.component';

@Component({
  selector: 'app-my-projects',
  standalone: true,
  imports: [CommonModule, ProjectModalComponent, TranslateModule],
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.scss']
})
export class MyProjectsComponent {
  /* --------------------------------------
   * List of all featured projects
   * -------------------------------------- */
  projects = [
    {
      title: 'Join',
      descriptionKey: 'PROJECTS.JOIN.DESCRIPTION',
      techStack: [
        { name: 'CSS', icon: 'assets/img/icon/css-project-icon.png' },
        { name: 'HTML', icon: 'assets/img/icon/html-project-icon.png' },
        { name: 'Firebase', icon: 'assets/img/icon/firebase-project-icon.png' },
        { name: 'Angular', icon: 'assets/img/icon/angular-project-icon.png' },
        { name: 'TypeScript', icon: 'assets/img/icon/typescript-project-icon.png' }
      ],
      github: 'https://github.com/Ismail-B/join',
      live: 'https://join.ismail-baris.de',
      image: 'assets/img/my_projects/join_preview.png'
    },
    {
      title: 'Shadow Shinobi',
      descriptionKey: 'PROJECTS.SHINOBI.DESCRIPTION',
      techStack: [
        { name: 'HTML', icon: 'assets/img/icon/html-project-icon.png' },
        { name: 'CSS', icon: 'assets/img/icon/css-project-icon.png' },
        { name: 'JavaScript', icon: 'assets/img/icon/javascript-project-icon.png' }
      ],
      github: 'https://github.com/Ismail-B/Shadow-Shinobi',
      live: 'https://shadowshinobi.ismail-baris.de',
      image: 'assets/img/my_projects/shadow_shinobi_preview.png'
    },
    {
      title: 'Pokedex',
      descriptionKey: 'PROJECTS.POKEDEX.DESCRIPTION',
      techStack: [
        { name: 'HTML', icon: 'assets/img/icon/html-project-icon.png' },
        { name: 'CSS', icon: 'assets/img/icon/css-project-icon.png' },
        { name: 'API', icon: 'assets/img/icon/api-project-icon.png' },
        { name: 'JavaScript', icon: 'assets/img/icon/javascript-project-icon.png' }
      ],
      github: 'https://github.com/Ismail-B/Pokedex',
      live: 'https://pokedex.ismail-baris.de',
      image: 'assets/img/my_projects/pokedex_preview.png'
    }
  ];

  /* --------------------------------------
   * State for currently opened modal
   * -------------------------------------- */
  selectedProjectIndex: number | null = null;

  /* --------------------------------------
   * Open / Close / Update modal
   * -------------------------------------- */
  openModal(index: number) {
    this.selectedProjectIndex = index;
    document.body.style.overflow = 'hidden'; // disable scroll in background
  }

  closeModal() {
    this.selectedProjectIndex = null;
    document.body.style.overflow = 'auto'; // re-enable scroll
  }

  updateProjectIndex(newIndex: number) {
    this.selectedProjectIndex = newIndex;
  }
}
