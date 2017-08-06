import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GoalsComponent } from './goals.component';
import { GoalListComponent } from './goal-list/goal-list.component';
import { GoalDetailComponent } from './goal/goal.component';

const routes: Routes = [
	{ path: '', component: GoalsComponent},
	{ path: 'goal', component: GoalDetailComponent },
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);

