import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormsModule, CommonModule, TranslateModule, HttpClientModule, RouterLink],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {

  constructor(public translateService: TranslateService, private router: Router) {}


  http = inject(HttpClient);
  privacyPolicyErrorVisible: boolean = false;
  isChecked: boolean = false; 
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

  navigateToImprint() {
    this.router.navigateByUrl('/imprint').then(() => {
      window.scrollTo(0, 0); 
    });
  }

  onSubmit(ngForm: NgForm) {
    if (ngForm.valid && ngForm.submitted) {
      if (!this.readOrNot) {
        console.error('Please accept the privacy policy');

        return;
      }
  
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            console.log('Form submitted successfully');
            ngForm.resetForm();
            this.showSuccessMessage();
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
    this.isChecked = true;
  this.readOrNot = true;
    this.submitFormCheck();
  } 

   submitFormCheck() {
    if (!this.readOrNot) {
      this.privacyPolicyErrorVisible = true;
    } else {
      this.privacyPolicyErrorVisible = false;
    }
  } 

  private showSuccessMessage() {
    const successElement = document.querySelector('.form__successmail') as HTMLElement;
  
    successElement.classList.add('success-visible');
  
    setTimeout(() => {
      successElement.classList.remove('success-visible');
    }, 1500); 
  }
  
  
  isFormValid(contactForm: NgForm): boolean {
    return contactForm.form.valid && this.readOrNot;
  }

  markFieldsIfInvalid(ngForm: NgForm) {
    if (!this.isFormValid(ngForm)) {
      Object.values(ngForm.controls).forEach(control => {
        control.markAsDirty();
      });
    };
  }

}

