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
      techStack: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Firebase'],
      github: 'https://github.com/Ismail-B/join',
      live: 'https://join-live-link.com',
      image: 'assets/img/my_projects/join_preview.png'
    },
    {
      title: 'Shadow Shinobi',
      description: 'Jump & run ninja game with fun mechanics and pixel art style.',
      techStack: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/Ismail-B/Shadow-Shinobi',
      live: 'https://shadow-shinobi-live.com',
      image: 'assets/img/my_projects/shadow_shinobi_preview.png'
    },
    {
      title: 'Pokedex',
      description: 'Simple app to browse Pokémon using an API.',
      techStack: ['HTML', 'CSS', 'API', 'JavaScript'],
      github: 'https://github.com/Ismail-B/Pokedex',
      live: 'https://pokedex-live.com',
      image: 'assets/img/my_projects/pokedex_preview.png'
    }
  ];

  selectedProjectIndex: number | null = null;

  openModal(index: number) {
    this.selectedProjectIndex = index;
  }

  closeModal() {
    this.selectedProjectIndex = null;
  }

  updateProjectIndex(newIndex: number) {
    this.selectedProjectIndex = newIndex;
  }
}
