import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PicturePageComponent } from './picturePage.component';

const contactRoutes: Routes = [
  {
    path: '',
    component: PicturePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(contactRoutes)],
  exports: [RouterModule]
})

export class PicturePageRoutingModule { }