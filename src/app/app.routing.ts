import { RouterModule, Routes } from '@angular/router';

import { TodosViewComponent } from './components/todos-view/todos-view.component';
import { AboutViewComponent } from './components/about-view/about-view.component';

const routes: Routes = [
	{ path: '', component: TodosViewComponent },
	{ path: 'about', component: AboutViewComponent}
];

export const routing = RouterModule.forRoot(routes);
