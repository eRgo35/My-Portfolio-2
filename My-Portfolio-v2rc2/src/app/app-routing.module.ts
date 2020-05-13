import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoderComponent } from './coder/coder.component';
import { MagicianComponent } from './magician/magician.component';
import { SpeedcuberComponent } from './speedcuber/speedcuber.component';
import { HelloComponent } from './hello/hello.component';


const routes: Routes = [
  { path: '', component: HelloComponent },
  { path: 'coder', component: CoderComponent },
  { path: 'magician', component: MagicianComponent },
  { path: 'speedcuber', component: SpeedcuberComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
