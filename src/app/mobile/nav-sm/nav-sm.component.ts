import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-sm',
  templateUrl: './nav-sm.component.html',
  styleUrls: ['./nav-sm.component.scss']
})
export class NavSmComponent implements OnInit {

  isActive = false;

  constructor() { }

  ngOnInit(): void {
  }
  
  scrollTo(e) {
    document.getElementById(e).scrollIntoView();
  }

}
