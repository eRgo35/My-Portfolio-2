import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  count = 0;

  link() {
    this.count += 1;
    if (this.count == 15) {
      document.getElementById("author-name").classList.add("TW9yZSBmdW4gb24gb2xkIG9sZCBvbmUgYnV0IHJlbWVtYmVyIHRoZSBsaWNlbnNl")
    }
  }
}
