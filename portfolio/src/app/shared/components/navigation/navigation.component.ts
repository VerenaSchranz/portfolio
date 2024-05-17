import { CommonModule, NgIf } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, HostListener } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [NgIf, TranslateModule, HttpClientModule, CommonModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent {
  isImprintPage: boolean = false;
  isChecked: boolean = false;
  isEnActive: boolean = true;
  isDeActive: boolean = false;
  showOverlay: boolean = false;
  mobileNavImage = "assets/img/Icons/logo-white.svg";
  isScrolled: boolean = false;

  constructor(public translateService: TranslateService, private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isImprintPage = event.url === '/imprint';
      }
    });
  }
  
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 1;
  }
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

    if (this.isChecked) {
      this.mobileNavImage = 'assets/img/Icons/logo.svg'; 
    } else {
      this.mobileNavImage = 'assets/img/Icons/logo-white.svg';
    }
  }

  closeMenu() {
    this.isChecked = false;
    this.showOverlay = false;

    this.mobileNavImage = 'assets/img/Icons/logo-white.svg';
  }
}
