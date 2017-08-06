import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/404page.component';

const routes: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',  loadChildren: './home/home.module#HomeModule' },
  { path: 'timer', loadChildren: './timer/timer.module#TimerModule'},
  { path: 'todo',  loadChildren: './todo/todo.module#TodoModule'},
  { path: 'goals', loadChildren: './goals/goals.module#GoalsModule'},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
