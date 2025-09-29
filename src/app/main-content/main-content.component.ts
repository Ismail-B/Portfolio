import { Component } from '@angular/core';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { ReferencesComponent } from './references/references.component';
import { SkillSetComponent } from './skill-set/skill-set.component';
import { TitleComponent } from './title/title.component';
import { FooterComponent } from '../shared/footer/footer.component';

/* === Main Content Component === */
@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [
    AboutMeComponent,
    ContactMeComponent,
    MyProjectsComponent,
    ReferencesComponent,
    SkillSetComponent,
    TitleComponent,
    FooterComponent
  ],
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent {}
