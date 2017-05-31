import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GoalListComponent } from './goal-list/goal-list.component';
import { GoalDetailComponent } from './goal/goal.component';

const goalsRoutes: Routes = [
	{ path: 'goals', component: GoalListComponent},
	{ path: 'goal/:id', component: GoalDetailComponent}
];

@NgModule({
	imports: [
		RouterModule.forChild(goalsRoutes)
	],
	exports: [
		RouterModule
	]
})
export class GoalsRoutingModule {}

