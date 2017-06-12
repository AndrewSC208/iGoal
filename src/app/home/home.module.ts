import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { MaterialModule } from '../shared/material.module';

/* Declarable Components*/
import { HomePageComponent } from './home-page/home-page.component';
/* Services */
// import { HomeService } from './home.service';

/* Routes */
import { HomeRoutingModule } from './home-routing.module';
import { GraphsComponent } from './home-page/graphs/graphs.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    NgxChartsModule
  ],
  declarations: [HomePageComponent, GraphsComponent]
})
export class HomeModule { }
