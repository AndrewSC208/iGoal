import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  links: Object[] = [
  	{ 
  		name: 'Home', 
  		href: '/home', 
  		icon: 'home', 
  		description: 'Home Base'
  	},
  	{ 
  		name: 'Goals', 
  		href: '/goals', 
  		icon: 'trending_up', 
  		description: 'create and view goals'
  	},
    { 
      name: 'Steps', 
      href: '/steps', 
      icon: 'rowing', 
      description: 'View Steps to achive your goals'
    }
  ]
  
}
