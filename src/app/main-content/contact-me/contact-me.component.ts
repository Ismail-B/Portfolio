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
    // Eingaben prüfen
    this.errors.name = !this.name;
    this.errors.email = !this.email;
    this.errors.message = !this.message;
    this.errors.privacy = !this.accepted;

    if (this.name && this.email && this.message && this.accepted) {
      console.log("Sende Daten an PHP:", this.name, this.email, this.message);

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
        console.log("Antwort von sendmail.php:", result);

        if (result.includes("success")) {
          alert("Danke! Deine Nachricht wurde verschickt ✅");
          // Felder zurücksetzen
          this.name = "";
          this.email = "";
          this.message = "";
          this.accepted = false;
        } else {
          alert("Fehler beim Senden ❌: " + result);
        }
      })
      .catch(err => {
        console.error("Fetch-Fehler:", err);
        alert("Serverfehler – bitte später nochmal versuchen.");
      });
    }
  }

  clearError(field: 'name' | 'email' | 'message' | 'privacy') {
    this.errors[field] = false;
  }
}
