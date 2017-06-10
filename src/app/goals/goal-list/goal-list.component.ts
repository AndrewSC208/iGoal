import { Component, OnInit  } from '@angular/core';
import { Router } from '@angular/router';

import { Goal } from '../goal';
import { GoalService } from '../goal.service';

@Component({
	selector:    'goal-list',
	templateUrl: 'goal-list.component.html',
	styleUrls: [ 'goal-list.component.scss' ],
	providers: [ GoalService ]
})
export class GoalListComponent implements OnInit {

	goals: Goal[];

	constructor(  
		private router: Router,
  		private goalService: GoalService
  	) {}

  	ngOnInit(): void {
  		this.goalService.getGoals().then(goals => this.goals = goals);
  	}

  	onSelect(goal: Goal) {
  		console.log(goal);
  		this.router.navigate(['/goal', goal.id]);
  	}

}