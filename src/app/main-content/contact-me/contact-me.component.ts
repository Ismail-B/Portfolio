import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent {
  name: string = '';
  email: string = '';
  message: string = '';
  accepted: boolean = false;

  successMessage: string = '';

  errors = {
    name: false,
    email: false,
    emailInvalid: false,
    message: false,
    privacy: false
  };

  onSubmit() {
    // Validierung
    this.errors.name = !this.name;

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!this.email) {
      this.errors.email = true;
      this.errors.emailInvalid = false;
    } else if (!emailPattern.test(this.email)) {
      this.errors.email = true;
      this.errors.emailInvalid = true;
    } else {
      this.errors.email = false;
      this.errors.emailInvalid = false;
    }

    this.errors.message = !this.message;
    this.errors.privacy = !this.accepted;

    if (this.errors.name || this.errors.email || this.errors.message || this.errors.privacy) {
      this.successMessage = '';
      return;
    }

    // Alles ok → Mail senden
    fetch("https://ismail-baris.de/sendmail.php", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        name: this.name,
        email: this.email,
        message: this.message
      })
    })
    .then(res => res.text())
    .then(result => {
      if (result.includes("success")) {
        this.successMessage = "Danke! Deine Nachricht wurde verschickt ✅";

        // Felder zurücksetzen
        this.name = "";
        this.email = "";
        this.message = "";
        this.accepted = false;
      } else {
        this.successMessage = "Fehler beim Senden ❌. Bitte versuche es später erneut.";
      }
    })
    .catch(() => {
      this.successMessage = "Serverfehler ❌ – bitte später nochmal versuchen.";
    });
  }

  clearError(field: 'name' | 'email' | 'message' | 'privacy') {
    this.errors[field] = false;

    if (field === 'email') this.errors.emailInvalid = false;

    if (field === 'name' && this.name.startsWith('Your Name')) this.name = '';
    if (field === 'email' && (this.email.startsWith('Your Email'))) this.email = '';
    if (field === 'message' && this.message.startsWith('Your Content')) this.message = '';
  }
}
