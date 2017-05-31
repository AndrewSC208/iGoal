import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
/* App Root*/
import { AppComponent } from './app.component';
/* Material Modules */
import { MdSidenavModule } from '@angular/material';
import { MdButtonModule } from '@angular/material'
/* Feature Modules */
import { GoalsModule } from './goals/goals.module';
import { HomeModule } from './home/home.module';
/* Routing Module*/
import { AppRoutingModule } from './app-routing.module';

import { PageNotFoundComponent } from './shared/404page.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdSidenavModule,
    MdButtonModule,
    HomeModule,
    GoalsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
