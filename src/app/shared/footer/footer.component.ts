import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

/* 🔹 Footer component */
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  // Currently no logic required
}
