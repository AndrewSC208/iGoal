import { Component } from '@angular/core';
import { Goal } from '../goal';

@Component({
	selector: 'goal-list',
	templateUrl: 'goal-list.component.html',
	styleUrls: [ 'goal-list.component.scss' ]
})
export class GoalListComponent {

	goals: Goal[] = [
		{
			id: 1,
  			title: 'Learn to Program',
  			description: 'I want to be a great programmer',
  			start_date: '2017-06-02T17:02:55.113Z',
			target_date: '2017-06-02T17:02:55.113Z',
			time_requirements: '30 Minutes a day'
		},
		{
			id: 2,
  			title: 'Learn to Program',
  			description: 'I want to be a great programmer',
  			start_date: '2017-06-02T17:02:55.113Z',
			target_date: '2017-06-02T17:02:55.113Z',
			time_requirements: '30 Minutes a day'
		},
		{
			id: 3,
  			title: 'Learn to Program',
  			description: 'I want to be a great programmer',
  			start_date: '2017-06-02T17:02:55.113Z',
			target_date: '2017-06-02T17:02:55.113Z',
			time_requirements: '30 Minutes a day'
		},
	];
	
}