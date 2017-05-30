import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  providers: [UserService]
})
export class HomePageComponent implements OnInit {
	users = []

  constructor(private userService: UserService) { }

  ngOnInit() {
  	this.users = this.userService.getUsers();

  }

  logout() {
  	this.userService.logout();
  }

}
