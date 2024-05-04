import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {
  http = inject(HttpClient);
  privacyPolicyErrorVisible: boolean = false;
  readOrNot: boolean = false;

   contactData = {
    name: "",
    email: "",
    message: "",
  } 

  mailTest = false;

  post = {
    endPoint: 'https://verenaschranz.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.valid && ngForm.submitted) {
      if (!this.readOrNot) {
        // Fehlerbehandlung, da die Datenschutzrichtlinie nicht akzeptiert wurde
        console.error('Please accept the privacy policy');

        return;
      }
  
      // Formular ist gültig und bereit zum Absenden
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            console.log('Form submitted successfully');
            ngForm.resetForm();
          },
          error: (error) => {
            console.error('Error submitting form:', error);
          },
          complete: () => {
            console.info('Post request complete');
          }
        });
    }
  }
  
   toggleCheckbox() {
    this.readOrNot = !this.readOrNot;
    this.submitFormCheck();
  } 

   submitFormCheck() {
    if (!this.readOrNot) {
      this.privacyPolicyErrorVisible = true;
    } else {
      this.privacyPolicyErrorVisible = false;
    }
  } 

  isFormValid(ngForm: NgForm): boolean {
    return ngForm.form.valid && this.readOrNot;
  }

  markFieldsIfInvalid(ngForm: NgForm) {
    if (!this.isFormValid(ngForm)) {
      Object.values(ngForm.controls).forEach(control => {
        control.markAsDirty();
      });
    };
  }

  goToPrivacyPolicy() {
  /*   this.formDataService.saveFormData(this.contactData);
    this.router.navigateByUrl('/privacyPolicy').then(() => {
      window.scrollTo(0, 0);
    }); */
  }
}

