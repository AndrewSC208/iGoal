import { Component, OnInit } from '@angular/core';
import { multi } from '../../mock-data';

@Component({
  selector: 'home-graph',
  templateUrl: './graphs.component.html',
  styleUrls: ['./graphs.component.scss']
})
export class GraphsComponent implements OnInit {

  constructor() {
    Object.assign(this, { multi} )   
  }

  ngOnInit() {
  }

  single: any[];
  multi: any[];

  view: any[] = [1220, 250];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = false;
  showXAxisLabel = false;
  xAxisLabel = 'Date';
  showYAxisLabel = true;
  roundDomains = true;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  // line, area
  autoScale = false;
    
  onSelect(event) {
    console.log(event);
  }

}
