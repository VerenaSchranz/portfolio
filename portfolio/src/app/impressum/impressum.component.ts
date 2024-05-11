import { Component, Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { TranslateModule } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-impressum',
  standalone: true,
  imports: [TranslateModule, HttpClientModule],
  templateUrl: './impressum.component.html',
  styleUrl: './impressum.component.scss'
})
export class ImpressumComponent {
  imprintHtml: string = '';
  constructor(private http: HttpClient) { }

}
