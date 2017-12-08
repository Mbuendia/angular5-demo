import { NgModule } from '@angular/core';

import { PersonRoutingModule } from './person.routing';

import { PersonComponent } from './person.component';

@NgModule({
  imports: [
    PersonRoutingModule
  ],
  declarations: [
    PersonComponent
  ]
})

export class PersonModule { }
