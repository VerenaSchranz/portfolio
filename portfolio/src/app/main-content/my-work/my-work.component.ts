import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-my-work',
  standalone: true,
  imports: [CommonModule, TranslateModule, HttpClientModule],
  templateUrl: './my-work.component.html',
  styleUrl: './my-work.component.scss',
})
export class MyWorkComponent {

  projects = [
    {
      mockup: 'join.png',
      name: 'Join',
      projectLanguage: 'JavaScript | HTML | CSS',
      description: 'join',
      link: 'join-kanban',
      liveTest: 'https://join.verenaschranz.de/',
      translatedDescription: '',
    },
    {
      mockup: 'pollo_loco.png',
      name: 'Pollo Loco',
      projectLanguage: 'JavaScript | HTML | CSS',
      description: 'epl',
      link: 'El_Pollo_Loco',
      liveTest: 'https://el-pollo-loco.verenaschranz.de/',
      translatedDescription: '',
    },
    // {
    //   mockup: 'simple_crm.png',
    //   name: 'COMING SOON',
    //   projectLanguage: 'Angular | Firebase',
    //   description: 'crm',
    //   link: 'simple-crm',
    //   liveTest: 'https://simple-crm.verenaschranz.de/',
    //   translatedDescription: '',
    // }, 
  ];

  private languageChangeSubscription: Subscription | undefined;
  constructor(private translateService: TranslateService) {}

  ngOnInit(): void {
    this.translateProjectDescriptions(); 
    this.languageChangeSubscription = this.translateService.onLangChange.subscribe(() => {
      this.translateProjectDescriptions();
    });
  }

  ngOnDestroy(): void {
    if (this.languageChangeSubscription) {
      this.languageChangeSubscription.unsubscribe();
    }
  }
  translateProjectDescriptions(): void {
    this.projects.forEach((project) => {
      const translationKey = `myWork.${project.description}`;
      this.translateService.get(translationKey).subscribe((translatedDescription: string) => {
        project.translatedDescription = translatedDescription;
      });
    });
  }

  isEven(index: number): boolean {
    return index % 2 === 0;
  }
}
