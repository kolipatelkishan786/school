import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IndexComponent} from './index/index.component';
import {ContactsComponent} from './contacts/contacts.component';

const approutes: Routes = [
  {path: 'index', redirectTo: '/index', pathMatch: 'full'},
  {path: '', component: IndexComponent},
  {path: 'contacts', component: ContactsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(approutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
