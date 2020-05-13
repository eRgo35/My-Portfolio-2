import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HelloComponent } from './hello/hello.component';
import { ProjectsComponent } from './projects/projects.component';
import { SpeedcubingComponent } from './speedcubing/speedcubing.component';
import { MagicComponent } from './magic/magic.component';
import { FooterComponent } from './footer/footer.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HelloComponent,
    ProjectsComponent,
    SpeedcubingComponent,
    MagicComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
