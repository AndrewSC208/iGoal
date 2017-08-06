import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { MaterialModule } from '../shared/material.module';
import { routing } from './goals-routing.module';
// === DECLARATIONS === //
import { GoalsComponent } from './goals.component';
import { GoalDetailComponent } from './goal/goal.component';
import { GoalListComponent } from './goal-list/goal-list.component';


@NgModule({
  imports: [
    CommonModule,
    routing,
    FormsModule,
    MaterialModule
  ],
  declarations: [ GoalDetailComponent, GoalListComponent, GoalsComponent ],
  exports: [
  	MaterialModule
  ]
})
export class GoalsModule { }
