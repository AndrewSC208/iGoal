import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './timer-routing.module';
import { TimerComponent } from './timer.component';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [TimerComponent]
})
export class TimerModule { }
