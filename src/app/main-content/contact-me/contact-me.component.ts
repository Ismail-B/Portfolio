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
      // Daten an sendmail.php senden
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
          alert("Danke! Deine Nachricht wurde verschickt ✅");
          // Felder leeren
          this.name = "";
          this.email = "";
          this.message = "";
          this.accepted = false;
        } else {
          alert("Fehler beim Senden ❌: " + result);
        }
      })
      .catch(() => alert("Serverfehler – bitte später nochmal versuchen."));
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
