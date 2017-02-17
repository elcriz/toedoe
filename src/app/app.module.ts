import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { TodosService } from './services/todos/todos.service';

import { rootReducer } from './store/root.reducer';
import { InitialState } from './store/initial-state';

import { AppComponent } from './components/app.component';
import { TodosViewComponent } from './components/todos-view/todos-view.component';
import { TodoFormComponent } from './components/todos-view/todo-form/todo-form.component';
import { TodosListComponent } from './components/todos-view/todos-list/todos-list.component';
import { TodoComponent } from './components/todos-view/todos-list/todo/todo.component';
import { AboutViewComponent } from './components/about-view/about-view.component';
import { routing } from './app.routing';

import { removeNgStyles, createNewHosts } from '@angularclass/hmr';

import '../scss/main.scss';

@NgModule({
	imports: [
		BrowserModule,
		HttpModule,
		FormsModule,
		ReactiveFormsModule,
		routing,
		StoreModule.provideStore(
			rootReducer, InitialState
		)
	],
	declarations: [
		AppComponent,
		TodosViewComponent,
		TodoFormComponent,
		TodosListComponent,
		TodoComponent,
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
