import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { routing } from './home.routing';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    routing
  ],
  declarations: [HomePageComponent]
})
export class HomeModule { }
