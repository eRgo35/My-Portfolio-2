import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CookieService } from 'ngx-cookie-service';
import { CoderComponent } from './coder/coder.component';
import { SpeedcuberComponent } from './speedcuber/speedcuber.component';
import { MagicianComponent } from './magician/magician.component';
import { HelloComponent } from './hello/hello.component';
import { ThemeService } from './theme.service';

@NgModule({
  declarations: [
    AppComponent,
    CoderComponent,
    SpeedcuberComponent,
    MagicianComponent,
    HelloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CookieService, ThemeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
