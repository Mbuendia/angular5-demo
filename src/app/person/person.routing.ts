import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonComponent } from './person.component';

const routes: Routes = [
  {    path: 'person/:id',             // Add /:id here
  component: PersonComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class PersonRoutingModule { }
