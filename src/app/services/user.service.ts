import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock.heroes';

@Injectable()
export class UserService {
	getUsers(): Hero[] {
		return HEROES;
	}

	logout() {
		console.log('we are logged out');
	}
}