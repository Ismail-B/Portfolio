import { Component } from '@angular/core';
import { ProjectModalComponent } from '../../shared/project-modal/project-modal.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-projects',
  standalone: true,
  imports: [CommonModule, ProjectModalComponent],
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.scss']
})
export class MyProjectsComponent {
  projects = [
    {
      title: 'Join',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      techStack: [
        { name: 'CSS', icon: 'assets/img/icon/css-project-icon.png' },
        { name: 'HTML', icon: 'assets/img/icon/html-project-icon.png' },
        { name: 'Firebase', icon: 'assets/img/icon/firebase-project-icon.png' },
        { name: 'Angular', icon: 'assets/img/icon/angular-project-icon.png' },
        { name: 'TypeScript', icon: 'assets/img/icon/typescript-project-icon.png' }
      ],
      github: 'https://github.com/Ismail-B/join',
      live: 'https://join-live-link.com',
      image: 'assets/img/my_projects/join_preview.png'
    },
    {
      title: 'Shadow Shinobi',
      description: 'Jump & run ninja game with fun mechanics and pixel art style. asdadwd dsadolaj jasjdo asdjosadj dasj oid oiajosiadjodj jsao jdoiasj oij sdiajoijd iosaj dj jasoij oidj aoij.',
      techStack: [
        { name: 'HTML', icon: 'assets/img/icon/html-project-icon.png' },
        { name: 'CSS', icon: 'assets/img/icon/css-project-icon.png' },
        { name: 'JavaScript', icon: 'assets/img/icon/javascript-project-icon.png' }
      ],
      github: 'https://github.com/Ismail-B/Shadow-Shinobi',
      live: 'https://shadow-shinobi-live.com',
      image: 'assets/img/my_projects/shadow_shinobi_preview.png'
    },
    {
      title: 'Pokedex',
      description: 'Simple app to browse Pokémon using an API.',
      techStack: [
        { name: 'HTML', icon: 'assets/img/icon/html-project-icon.png' },
        { name: 'CSS', icon: 'assets/img/icon/css-project-icon.png' },
        { name: 'API', icon: 'assets/img/icon/api-project-icon.png' },
        { name: 'JavaScript', icon: 'assets/img/icon/javascript-project-icon.png' }
      ],
      github: 'https://github.com/Ismail-B/Pokedex',
      live: 'https://pokedex-live.com',
      image: 'assets/img/my_projects/pokedex_preview.png'
    }
  ];

  selectedProjectIndex: number | null = null;

  openModal(index: number) {
    this.selectedProjectIndex = index;
    document.body.style.overflow = 'hidden';   // Scrollen deaktivieren
  }
  
  closeModal() {
    this.selectedProjectIndex = null;
    document.body.style.overflow = 'auto';     // Scrollen wieder aktivieren
  }

  updateProjectIndex(newIndex: number) {
    this.selectedProjectIndex = newIndex;
  }
}
