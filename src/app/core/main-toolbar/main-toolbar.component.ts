import { Component } from '@angular/core';

@Component({
	selector: 'app-toolbar',
	template: `
		<md-toolbar>{{ title }}</md-toolbar>
	`
})
export class MainToolbarComponent {
	title: string;

	constructor() {
		this.title = 'iGoal';
	}

}