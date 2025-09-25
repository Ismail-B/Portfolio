import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent {
  name: string = '';
  email: string = '';
  message: string = '';
  accepted: boolean = false;

  errors = {
    name: false,
    email: false,
    message: false,
    privacy: false
  };

  onSubmit() {
    this.errors.name = !this.name;
    this.errors.email = !this.email;
    this.errors.message = !this.message;
    this.errors.privacy = !this.accepted;

    if (this.name && this.email && this.message && this.accepted) {
      console.log("funktionier");
    }
  }

  clearError(field: 'name' | 'email' | 'message' | 'privacy') {
    this.errors[field] = false;

    // Feld leeren, falls gerade Fehlermeldung drinsteht
    if (field === 'name' && !this.name) this.name = '';
    if (field === 'email' && !this.email) this.email = '';
    if (field === 'message' && !this.message) this.message = '';
  }
}
