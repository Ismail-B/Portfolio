import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { TranslateModule } from '@ngx-translate/core';

/**
 * Legal Notice Page
 * - Displays legal information (Impressum)
 * - Includes navbar, footer, and translations
 * - Scrolls to top on load
 */
@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, TranslateModule],
  templateUrl: './legal-notice.component.html',
  styleUrls: ['./legal-notice.component.scss']
})
export class LegalNoticeComponent implements OnInit {
  ngOnInit() {
    window.scrollTo(0, 0);
  }
}
