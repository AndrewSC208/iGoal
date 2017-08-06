import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo.component';
import { routing } from './todo-routing.module';

@NgModule({
  imports: [
    routing,
    CommonModule
  ],
  declarations: [TodoComponent]
})
export class TodoModule { }
