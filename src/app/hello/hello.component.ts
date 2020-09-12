import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event']) onScrollEvent($event){
    var val = (1 - window.pageYOffset / 800).toString();
    var val2 = ((-window.pageYOffset) / 5).toString() + "px";
    document.getElementById("fixed").style.opacity = val;
    document.getElementById("fixed").style.top = val2;
  }
}
