import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndenturesComponent } from './indentures.component';

const homeRoutes: Routes = [
  {
    path: '',
    component: IndenturesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(homeRoutes)],
  exports: [RouterModule]
})

export class IndenturesRoutingModule { }