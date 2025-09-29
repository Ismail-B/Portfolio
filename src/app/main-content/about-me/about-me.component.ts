import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

/**
 * AboutMeComponent
 * ----------------
 * Displays the "About Me" section with personal introduction,
 * profile image, and key attributes (location, problem-solving, tech foundation).
 * Uses translations from i18n JSON files.
 */
@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {}
