import { Component } from '@angular/core';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { ReferencesComponent } from './references/references.component';
import { SkillSetComponent } from './skill-set/skill-set.component';
import { TitleComponent } from './title/title.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [AboutMeComponent, ContactMeComponent, MyProjectsComponent, ReferencesComponent,SkillSetComponent,TitleComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
