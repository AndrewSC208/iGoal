import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }    from '@angular/forms';
/* Import material module*/
import { MaterialModule } from '../shared/material.module';
/* Declarable Components*/
import { GoalDetailComponent } from './goal/goal.component';
import { GoalListComponent } from './goal-list/goal-list.component';
/* Services */
// import { GoalService } from './goal.service';

/* Routes */
import { GoalsRoutingModule } from './goals-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    GoalsRoutingModule
  ],
  declarations: [ GoalDetailComponent, GoalListComponent ],
  exports: [
  	MaterialModule
  ]
})
export class GoalsModule { }
