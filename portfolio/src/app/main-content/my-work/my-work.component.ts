import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

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
      translatedDescription: 'join',
      link: 'join',
      liveTest: '#',
    },
    {
      mockup: 'pollo_loco.png',
      name: 'Pollo Loco',
      projectLanguage: 'JavaScript | HTML | CSS',
      translatedDescription: 'epl',
      link: 'El-Polo-Loco',
      liveTest: '#',
    },
    {
      mockup: 'simple_crm.png',
      name: 'Simple CRM',
      projectLanguage: 'Angular | Firebase',
      translatedDescription: 'crm',
      link: 'simple-crm',
      liveTest: '#',
    },
  ];
  constructor(private translateService: TranslateService) {}

  ngOnInit(): void {
    this.translateProjectDescriptions();
  }

  translateProjectDescriptions(): void {
    this.projects.forEach((project) => {
      const translationKey = `myWork.${project.translatedDescription}`;
      this.translateService.get(translationKey).subscribe((translatedDesc: string) => {
        project.translatedDescription = translatedDesc;
      });
    });
  }

  isEven(index: number): boolean {
    return index % 2 === 0;
  }
}
