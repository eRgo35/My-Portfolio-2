import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ThemeService } from './theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  ngOnInit() {}
}
