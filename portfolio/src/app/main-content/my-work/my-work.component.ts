import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-my-work',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-work.component.html',
  styleUrl: './my-work.component.scss',
})
export class MyWorkComponent {
  
  isEven(index: number): boolean {
    return index % 2 === 0;
  }
  
  projects = [
    {
      mockup: 'join.png',
      name: 'Join',
      projectLanguage: 'JavaScript | HTML | CSS',
      content:
        'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      link: 'join',
      liveTest: '#',
    },
    {
      mockup: 'pollo_loco.png',
      name: 'Pollo Loco',
      projectLanguage: 'JavaScript | HTML | CSS',
      content:
        'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
        link: 'El-Polo-Loco',
        liveTest: '#',
      },
    {
      mockup: 'simple_crm.png',
      name: 'Simple CRM',
      projectLanguage: 'Angular | Firebase',
      content:
        'A very Simple Customer Relationship Management system working with CRUD functionality.',
        link: 'simple-crm',
        liveTest: '#',
      },
  ];


}
