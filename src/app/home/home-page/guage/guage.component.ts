import { Component, OnInit } from '@angular/core';
import { single } from '../../mock-data';

@Component({
  selector: 'home-guage',
  templateUrl: './guage.component.html',
  styleUrls: ['./guage.component.scss']
})
export class GuageComponent implements OnInit {

  constructor() {
  	this.data = single;
  }

  ngOnInit() {
  }

  view: any[] = [500, 250];
  data: any[];
  
  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C']
  };
  
  onSelect(event) {
    console.log(event);
  }

}
