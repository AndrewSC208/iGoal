import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Declarable Components*/
import { HomePageComponent } from './home-page/home-page.component';

/* Services */
// import { HomeService } from './home.service';

/* Routes */
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [HomePageComponent]
})
export class HomeModule { }
