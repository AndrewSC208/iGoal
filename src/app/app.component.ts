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
      name: "Todo's", 
      href: '/todo', 
      icon: 'trending_up', 
      description: "create and view to do's"
    },
    { 
      name: "Goal's", 
      href: '/goals', 
      icon: 'donut_small', 
      description: 'create and view goals'
    },
    { 
      name: "Timer", 
      href: '/timer', 
      icon: 'av_timer', 
      description: 'Use the timer to keep track of your shit'
    }
  ]
  
}