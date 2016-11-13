import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeroesComponent } from '../app/heroes/heroes.component';
import { HeroDetailComponent } from '../app/hero-detail/hero-detail.component';
import { DashboardComponent } from '../app/dashboard/dashboard.component';

import { HeroService } from './hero.service';



@NgModule ({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    AppRoutingModule,
  ],
  declarations: [ 
    AppComponent,
    DashboardComponent,
    HeroesComponent, 
    HeroDetailComponent 
  ],
  providers: [
    HeroService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { 

}