import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
// Material imports:
import { MdToolbarModule } from '@angular/material';
import { MdSidenavModule } from '@angular/material';
import { MdButtonModule } from '@angular/material';
// Core:
import { MainToolbarComponent } from './main-toolbar/main-toolbar.component';
import { MainComponent } from './main/main.component';

@NgModule({
	imports: [
		CommonModule,
		MdToolbarModule,
		MdSidenavModule,
		MdButtonModule,
		AppRoutingModule
	],
	declarations: [ 
		MainToolbarComponent, 
		MainComponent 
	],
	exports: [
		MdToolbarModule,
		MdSidenavModule,
		MdButtonModule,
		MainToolbarComponent,
		MainComponent
	]
})
export class CoreModule {}
