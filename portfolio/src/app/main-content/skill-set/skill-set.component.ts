import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skill-set',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skill-set.component.html',
  styleUrl: './skill-set.component.scss',
})
export class SkillSetComponent {
  imagePath: "assets/img/Icons/skillset/desktop/" | string = "assets/img/Icons/skillset/desktop/";

  skillIcons = [
    { icon: 'angular.svg', name: 'Angular' },
    { icon: 'typescript.svg', name: 'TypeScript' },
    { icon: 'javascript.svg', name: 'JavaScript' },
    { icon: 'html.svg', name: 'HTML' },
    { icon: 'scrum.svg', name: 'Scrum' },
    { icon: 'firebase.svg', name: 'Firebase' },
    { icon: 'git.svg', name: 'GIT' },
    { icon: 'css.svg', name: 'CSS' },
    { icon: 'api.svg', name: 'Rest-Api' },
    { icon: 'material_design.svg', name: 'Material Design' }
  ];

  getSkillIconPath(icon: string): string {
    return this.imagePath + icon;
  }
}
