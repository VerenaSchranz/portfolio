import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { ImprintComponent } from './imprint/imprint.component';
import { NavigationComponent } from './shared/components/navigation/navigation.component';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet,
    MainContentComponent,
    FooterComponent,
    NavigationComponent,
    ImprintComponent,
    TranslateModule,
    HttpClientModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})


export class AppComponent implements OnInit {
  title = 'Verena Schranz';


  constructor(public translate: TranslateService) {
    translate.setDefaultLang('en');
  }
  ngOnInit() {
    AOS.init();
  }
}
