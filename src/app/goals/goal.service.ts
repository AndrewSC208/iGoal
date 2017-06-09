import { Injectable } from '@angular/core';

import { Goal } from './goal';
import { GOALS } from './mock-goals';

let goalsPromise = Promise.resolve(GOALS);

@Injectable()
export class GoalService {

	getGoals(): Promise<Goal[]> {
		return goalsPromise;
	}

	getGoal(id: number | string) {
		return goalsPromise
			.then(goals => goals.find(goal => goal.id === +id));
	}

	createGoal(goal): void {
		GOALS.push(goal);
	}
	
}
