import { Component } from '@angular/core';
import { NavbarComponent } from '../shared/navbar/navbar.component'; 
import { FooterComponent } from '../shared/footer/footer.component';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {

}
