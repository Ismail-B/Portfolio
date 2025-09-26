import { Component } from '@angular/core';

@Component({
  selector: 'app-my-projects',
  standalone: true,
  imports: [],
  templateUrl: './my-projects.component.html',
  styleUrl: './my-projects.component.scss'
})
export class MyProjectsComponent {
  projects = [
    {
      title: 'Join',
      description: 'Task manager inspired by the Kanban System...',
      techStack: ['CSS', 'HTML', 'Firebase', 'Angular', 'TypeScript'],
      github: 'https://github.com/dein-repo',
      live: 'https://dein-live-link',
      image: 'assets/img/my_projects/join.png'
    },
    {
      title: 'Next App',
      description: 'Another awesome project...',
      techStack: ['React', 'NodeJS'],
      github: '#',
      live: '#',
      image: 'assets/img/my_projects/next.png'
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
