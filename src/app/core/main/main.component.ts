import { Component } from '@angular/core';
import { MainToolbarComponent } from '../main-toolbar/main-toolbar.component';

@Component({
	selector: 'app-main',
	template: `
		<md-sidenav-container class="my-content">
			
			<app-toolbar></app-toolbar>

  		<md-sidenav #sidenav class="example-sidenav">
    		Jolly good!
  		</md-sidenav>

  		<div class="example-sidenav-content">
    		<button md-button (click)="sidenav.open()">Open sidenav</button>
  		</div>

			<router-outlet></router-outlet>

		</md-sidenav-container>
	`,
	styleUrls: ['./main.component.scss']
})
export class MainComponent {

}