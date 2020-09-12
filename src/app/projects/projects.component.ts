import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  goto(e) {
    window.location.href = e;
  }

  @HostListener('window:scroll', ['$event']) onScrollEvent($event){
    var val2 = (((window.pageYOffset - window.innerHeight)) / 3).toString() + "px 0 0 0";
    document.getElementById("projects-card").style.margin = val2;
  }
}
