import { Component } from '@angular/core';

@Component({
	selector: 'app',
	template: `
	<header class="page-header">
		<h1>ToeDoe</h1>
		<a [routerLink]="['/']">Todos</a>
		<a [routerLink]="['/about']">About</a>
	</header>
	<main>
		<router-outlet></router-outlet>
	</main>
	`
})

export class AppComponent {}
