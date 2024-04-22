import { Component } from '@angular/core';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { HeaderComponent } from './header/header.component';
import { IntroComponent } from './intro/intro.component';
import { MyWorkComponent } from './my-work/my-work.component';
import { SkillSetComponent } from './skill-set/skill-set.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [
    HeaderComponent,
    IntroComponent,
    SkillSetComponent,
    MyWorkComponent,
    ContactFormComponent
  ],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
