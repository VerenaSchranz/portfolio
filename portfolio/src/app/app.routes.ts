import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { ImpressumComponent } from './impressum/impressum.component';

export const routes: Routes = [
  { path: '', component: MainContentComponent },
  { path: 'impressum', component: ImpressumComponent },
];


export class AppRoutingModule { }
