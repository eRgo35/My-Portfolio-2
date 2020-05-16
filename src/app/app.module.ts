import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NavComponent } from './nav/nav.component';
import { HelloComponent } from './hello/hello.component';
import { ProjectsComponent } from './projects/projects.component';
import { FooterComponent } from './footer/footer.component';
import { NavSmComponent } from './mobile/nav-sm/nav-sm.component';
import { HelloSmComponent } from './mobile/hello-sm/hello-sm.component';
import { ProjectsSmComponent } from './mobile/projects-sm/projects-sm.component';
import { FooterSmComponent } from './mobile/footer-sm/footer-sm.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HelloComponent,
    ProjectsComponent,
    FooterComponent,
    NavSmComponent,
    HelloSmComponent,
    ProjectsSmComponent,
    FooterSmComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
