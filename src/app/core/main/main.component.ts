import { Component, Input } from '@angular/core';
import { MainToolbarComponent } from '../main-toolbar/main-toolbar.component';

@Component({
	selector: 'app-main',
	template: `
		<md-sidenav-container class="my-content">
			
			<app-toolbar></app-toolbar>

			<div class="example-sidenav-content">
    		<button md-button (click)="sidenav.open()">Open sidenav</button>
  		</div>

  		<md-sidenav #sidenav class="example-sidenav" mode='push'>
    		Jolly good!
  		</md-sidenav>

			<router-outlet></router-outlet>

		</md-sidenav-container>
	`,
	styleUrls: ['./main.component.scss']
})
export class MainComponent {
	
}