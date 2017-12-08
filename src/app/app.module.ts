import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { PersonComponent } from './person/person.component';
import { FooterComponent } from './footer/footer.component';
import { PagerComponent } from './components/pager/pager.component';
import 'materialize-css';
import { MaterializeModule } from 'angular2-materialize';
import {HttpClientModule} from '@angular/common/http';
import {DemoService} from './services/service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PersonComponent,
    FooterComponent,
    PagerComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule,
    MaterializeModule
  ],
  providers: [DemoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
