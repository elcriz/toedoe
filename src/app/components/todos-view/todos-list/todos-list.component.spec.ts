import { TestBed, ComponentFixture } from '@angular/core/testing';

import { Component as StubComponent, Input } from '@angular/core';

import { TodosListComponent as Component } from './todos-list.component';

describe('TodosListComponent', () => {

	let fixture: ComponentFixture<Component>;
	let component: Component;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [Component, StubTodoComponent]
		});

		fixture = TestBed.createComponent(Component);
		component = Object.assign(fixture.debugElement.componentInstance, {
			todos: {
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
			}
		});
	});

	it('should render a list element', () => {
		fixture.detectChanges();
		expect(!!fixture.nativeElement.querySelector('[test-id="todos-list"]')).toBe(true);
	});

	it('should render sufficient todo items', () => {
		fixture.detectChanges();
		expect(fixture.nativeElement.querySelectorAll('todo').length).toBe(2);
	});
});

@StubComponent({ selector: 'todo', template: '' })
class StubTodoComponent {
	@Input() item;
}
