import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

	graphTitle: string = "Achivments";
	guageTitle: string = "Something";
	listTitle: string = "To do List"

  constructor() { }

  ngOnInit() {
  }
}
