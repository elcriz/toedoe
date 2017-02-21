import { TestBed, ComponentFixture } from '@angular/core/testing';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TodoFormComponent as Component } from './todo-form.component';

describe('TodoFormComponent', () => {

	let fixture: ComponentFixture<Component>;
	let component: Component;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [Component],
			imports: [FormsModule, ReactiveFormsModule]
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
			},
			text: 'Lorem ipsum'
		});
	});

	it('should render a form', () => {
		fixture.detectChanges();
		expect(!!fixture.nativeElement.querySelector('form')).toBe(true);
	});

	it('should bind correctly to the input field model', () => {
		fixture.detectChanges();
		expect(fixture.nativeElement.querySelector('form input').getAttribute('ng-reflect-model')).toBe('Lorem ipsum');
	});

	it('should render a toggle all button', () => {
		fixture.detectChanges();
		expect(!!fixture.nativeElement.querySelector('[test-id="toggle-all-button"]')).toBe(true);
	});

	it('should render a delete all button', () => {
		fixture.detectChanges();
		expect(!!fixture.nativeElement.querySelector('[test-id="toggle-all-button"]')).toBe(true);
	});
});
