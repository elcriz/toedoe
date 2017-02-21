import { TestBed, ComponentFixture } from '@angular/core/testing';

import { Component as StubComponent, Input } from '@angular/core';

import { TodosService } from '../../services/todos/todos.service';
import { StoreModule } from '@ngrx/store';
import { Observable } from 'rxjs';

import { TodosViewComponent as Component } from './todos-view.component';

describe('TodosViewComponent', () => {

	let fixture: ComponentFixture<Component>;
	let component: Component;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [Component, StubTodoFormComponent, StubTodosListComponent],
			providers: [TodosService],
			imports: [StoreModule.provideStore({})]
		});

		fixture = TestBed.createComponent(Component);
		component = Object.assign(fixture.debugElement.componentInstance, {
			todos: Observable.of({
				items: [
					{
						id: 1,
						text: 'A todo item',
						isCompleted: false
					},
					{
						id: 2,
						text: 'Another todo item',
						isCompleted: false
					}
				]
			})
		});
	});

	it('should render a todo form', () => {
		fixture.detectChanges();
		expect(!!fixture.nativeElement.querySelector('todo-form')).toBe(true);
	});

	it('should render a todos list', () => {
		fixture.detectChanges();
		expect(!!fixture.nativeElement.querySelector('todos-list')).toBe(true);
	});
});

@StubComponent({ selector: 'todo-form', template: '' })
class StubTodoFormComponent {
	@Input() todos;
}

@StubComponent({ selector: 'todos-list', template: '' })
class StubTodosListComponent {
	@Input() todos;
}
