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
  constructor(private translateService: TranslateService) {
    this.translateProjectDescriptions();
  }

  translateProjectDescriptions(): void {
    this.projects.forEach((project) => {
      this.translateService.get(project.translatedDescription).subscribe((translatedDesc: string) => {
        project.translatedDescription = translatedDesc;
      });
    });
  }

  isEven(index: number): boolean {
    return index % 2 === 0;
  }

  projects = [
    {
      mockup: 'join.png',
      name: 'Join',
      projectLanguage: 'JavaScript | HTML | CSS',
      translatedDescription: 'myWork.join',
      link: 'join',
      liveTest: '#',
    },
    {
      mockup: 'pollo_loco.png',
      name: 'Pollo Loco',
      projectLanguage: 'JavaScript | HTML | CSS',
      translatedDescription: 'myWork.epl',
      link: 'El-Polo-Loco',
      liveTest: '#',
    },
    {
      mockup: 'simple_crm.png',
      name: 'Simple CRM',
      projectLanguage: 'Angular | Firebase',
      translatedDescription: 'myWork.crm',
      link: 'simple-crm',
      liveTest: '#',
    },
  ];
}
