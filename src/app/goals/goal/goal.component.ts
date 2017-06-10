import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { Goal } from '../goal';
import { GoalService } from '../goal.service';

@Component({
	selector: 'goal',
	templateUrl: 'goal.component.html',
	styleUrls: [ 'goal.component.scss' ],
	providers: [ GoalService ]
})
export class GoalDetailComponent implements OnInit {

	goal: Goal = {
		id: 0,
		title: '',
		description: '',
		start_date: '',
		target_date: '',
		time_requirements: ''
	}

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private goalService: GoalService
	) {}

	ngOnInit() {
		this.route.params
			.switchMap((params: Params) => this.goalService.getGoal(+params['id']))
			.subscribe((goal: Goal) => this.goal = goal);
	}

	create(goal: Goal) {
		this.goalService.createGoal(goal);
	}
}

