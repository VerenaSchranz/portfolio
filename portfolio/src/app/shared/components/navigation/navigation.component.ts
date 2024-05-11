import { NgIf } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [NgIf, TranslateModule, HttpClientModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent {
  isChecked: boolean = false;
  isEnActive: boolean = true;
  isDeActive: boolean = false;
  showOverlay: boolean = false;

  constructor(public translateService: TranslateService) {}

  changeLanguage(langCode: string) {
    this.translateService.use(langCode);
    if (langCode === 'en') {
      this.isEnActive = true;
      this.isDeActive = false;
    } else if (langCode === 'de') {
      this.isEnActive = false;
      this.isDeActive = true;
    }
  }

  toggle() {
    this.isChecked = !this.isChecked;
    this.showOverlay = this.isChecked;
  }

  closeMenu() {
    this.isChecked = false;
    this.showOverlay = false;
  }
}
