import { NgIf } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [NgIf, TranslateModule, HttpClientModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {
    isChecked = false;
    
    showOverlay = false;

  constructor(public translateService: TranslateService) {}

  changeLanguage(langCode: string) {
    this.translateService.use(langCode);
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
