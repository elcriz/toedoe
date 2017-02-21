import { TestBed, ComponentFixture } from '@angular/core/testing';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TodoComponent as Component } from './todo.component';

describe('TodoComponent', () => {

	let fixture: ComponentFixture<Component>;
	let component: Component;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [Component],
			imports: [FormsModule, ReactiveFormsModule]
		});

		fixture = TestBed.createComponent(Component);
		component = Object.assign(fixture.debugElement.componentInstance, {
			item: {
				id: 1,
				text: 'Lorem ipsum',
				isCompleted: false
			}
		});
	});

	it('should render an input field', () => {
		fixture.detectChanges();
		expect(!!fixture.nativeElement.querySelector('[test-id="todo-input"]')).toBe(true);
	});

	it('should render the todo item\'s text in the input field', () => {
		fixture.detectChanges();
		expect(fixture.nativeElement.querySelector('[test-id="todo-input"]').getAttribute('ng-reflect-value')).toBe('Lorem ipsum');
	});

	it('should render `Complete` in the toggle button if the todo item is not completed', () => {
		fixture.detectChanges();
		expect(fixture.nativeElement.querySelector('[test-id="toggle-button"]').innerText).toContain('Complete');
	});

	it('should render `Uncomplete` in the toggle button if the todo item is not completed', () => {
		component.item = { ...component.item, isCompleted: true };
		fixture.detectChanges();
		expect(fixture.nativeElement.querySelector('[test-id="toggle-button"]').innerText).toContain('Uncomplete');
	});
});
