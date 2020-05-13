import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {
  
  ngOnInit() {}
  // cookieValue = 'UNKNOWN';

  // constructor(private cookieService: CookieService) { }

  // darkTheme = true;

  // changeTheme() {
    
  //   var hello = document.getElementById('live-hello');

  //   if (this.darkTheme === false) {
  //     hello.className = "dark-hello";
  //     this.cookieService.set( 'theme', 'dark', 1337 );
  //     this.darkTheme = true;
  //   }
  //   else if (this.darkTheme === true) {
  //     hello.className = "light-hello";
  //     this.cookieService.set( 'theme', 'light', 1337 );
  //     this.darkTheme = false;
  //   }
  // }

  // ngOnInit() {
  //   this.cookieValue = this.cookieService.get('theme');
  //   var hello = document.getElementById('live-hello');
    
  //   if (this.cookieValue == "light") {
  //     hello.className = "light-hello";
  //     this.darkTheme = false;
  //   }
  //   else if (this.cookieValue == "dark") {
  //     hello.className = "dark-hello";
  //     this.darkTheme = true;
  //   }
  // }
}
