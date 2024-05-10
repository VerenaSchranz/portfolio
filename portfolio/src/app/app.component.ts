import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { ImprintComponent } from './imprint/imprint.component';
import { NavigationComponent } from './shared/components/navigation/navigation.component';
import {TranslateModule} from '@ngx-translate/core';

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
    TranslateModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'Verena Schranz';
}
