import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';

const homeRoutes: Routes = [{
  path: '',
  component: MainComponent,
  children: [
    {
      path: 'Home',
      loadChildren: () => import('../home/home.module').then(m => m.HomeModule)
    },
    {
      path: 'Contacts',
      loadChildren: () => import('../contacts/contacts.module').then(m => m.ContactsModule)
    },
    {
      path: 'Indentures',
      loadChildren: () => import('../indentures/indentures.module').then(m => m.IndenturesModule)
    },
    {
      path: 'FAQ',
      loadChildren: () => import('../faq/faq.module').then(m => m.FaqModule)
    },
    {
      path: '',
      redirectTo: 'Home',
      pathMatch: 'full'
    }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(homeRoutes)],
  exports: [RouterModule]
})

export class MainRoutingModule { }