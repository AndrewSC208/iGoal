import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }    from '@angular/forms';

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
    GoalsRoutingModule
  ],
  declarations: [ GoalDetailComponent, GoalListComponent ]
})
export class GoalsModule { }
