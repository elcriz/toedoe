import { Component } from '@angular/core';

@Component({
	selector: 'app',
	template: `
	<section class="todos">
		<header class="todos__header">
			<h1>ToeDoe</h1>
			<a [routerLink]="['/']">Todos</a>
			<a [routerLink]="['/about']">About</a>
		</header>
		<main>
			<router-outlet></router-outlet>
		</main>
	</section>
	`
})

export class AppComponent {}
