import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TimerComponent } from './timer.component';

const routes: Routes = [
  { path: '', component: TimerComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);