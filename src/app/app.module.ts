import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* App Root*/
import { AppComponent } from './app.component';
/* Custom Material Module */
import { MaterialModule } from './shared/material.module';
/* Feature Modules */
import { GoalsModule } from './goals/goals.module';
import { HomeModule } from './home/home.module';
import { TodoModule } from './todo/todo.module';
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
    MaterialModule,
    HomeModule,
    GoalsModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
