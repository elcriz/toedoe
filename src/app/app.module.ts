import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { TodosService } from './services/todos/todos.service';

import { AppComponent } from './components/app.component';
import { TodosViewComponent } from './components/todos-view/todos-view.component';
import { AboutViewComponent } from './components/about-view/about-view.component';
import { routing } from './app.routing';

import { removeNgStyles, createNewHosts } from '@angularclass/hmr';

@NgModule({
	imports: [
		BrowserModule,
		HttpModule,
		FormsModule,
		routing
	],
	declarations: [
		AppComponent,
		TodosViewComponent,
		AboutViewComponent
	],
	providers: [
		TodosService
	],
	bootstrap: [AppComponent]
})

export class AppModule {

	constructor(public appRef: ApplicationRef) {}

	hmrOnInit(store) {
		console.log('HMR store', store);
	}

	hmrOnDestroy(store) {
		let cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);

		// Recreates elements
		store.disposeOldHosts = createNewHosts(cmpLocation);

		// Removes styles
		removeNgStyles();
	}

	hmrAfterDestroy(store) {

		// Displays new elements
		store.disposeOldHosts();
		delete store.disposeOldHosts;
	}
}
