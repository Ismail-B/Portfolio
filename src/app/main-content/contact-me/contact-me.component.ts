import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

/**
 * ContactMeComponent
 * 
 * Handles the contact form, including:
 * - Input validation (name, email, message, privacy checkbox)
 * - Sending form data to the backend (sendmail.php)
 * - Displaying success and error messages
 */
@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule, TranslateModule],
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent {
  /* --- Form Fields --- */
  name: string = '';
  email: string = '';
  message: string = '';
  accepted: boolean = false;

  /* --- UI State --- */
  successMessage: string = '';

  /* --- Validation Errors --- */
  errors = {
    name: false,
    email: false,
    emailInvalid: false,
    message: false,
    privacy: false
  };

  constructor(private translate: TranslateService) {}

  /* --- Submit Handler --- */
  onSubmit(): void {
    this.validateInputs();

    if (this.hasErrors()) {
      this.successMessage = '';
      return;
    }

    this.sendForm();
  }

  /* --- Error Reset --- */
  clearError(field: 'name' | 'email' | 'message' | 'privacy'): void {
    this.errors[field] = false;
    if (field === 'email') this.errors.emailInvalid = false;
  }

  /* --- Input Validation --- */
  private validateInputs(): void {
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
  }

  /* --- Check if Form has Errors --- */
  private hasErrors(): boolean {
    return (
      this.errors.name ||
      this.errors.email ||
      this.errors.message ||
      this.errors.privacy
    );
  }

  /* --- Send Form to Backend --- */
  private sendForm(): void {
    fetch('https://ismail-baris.de/sendmail.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        name: this.name,
        email: this.email,
        message: this.message
      })
    })
      .then(res => res.text())
      .then(result => {
        if (result.includes('success')) {
          this.successMessage = this.translate.instant('CONTACT.SUCCESS');
          this.resetForm();
        } else {
          this.successMessage = this.translate.instant('CONTACT.ERROR');
        }
      })
      .catch(() => {
        this.successMessage = this.translate.instant('CONTACT.SERVER');
      });
  }

  /* --- Reset Form after Success --- */
  private resetForm(): void {
    this.name = '';
    this.email = '';
    this.message = '';
    this.accepted = false;
  }
}
