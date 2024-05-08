import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [NgIf],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {
    isChecked = false;
    
    showOverlay = false;
  
    toggle() {
      this.isChecked = !this.isChecked;
      this.showOverlay = this.isChecked;
    }
  
    closeMenu() {
      this.isChecked = false; 
      this.showOverlay = false;
    }
}
