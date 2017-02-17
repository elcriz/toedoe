import { Component } from '@angular/core';

@Component({
	selector: 'app',
	template: `
		<header>
			<a [routerLink]="['/']">Todos</a>
			<a [routerLink]="['/about']">About</a>
		</header>
		<main>
			<router-outlet></router-outlet>
		</main>
	`
})

export class AppComponent {}
