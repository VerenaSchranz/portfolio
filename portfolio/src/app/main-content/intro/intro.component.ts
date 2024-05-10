import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [TranslateModule, HttpClientModule],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.scss'
})
export class IntroComponent {
  constructor(public translateService: TranslateService) {}
  
  changeLanguage(langCode: string) {
    this.translateService.use(langCode);
  }
}
