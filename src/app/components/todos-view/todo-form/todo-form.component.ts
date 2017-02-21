import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todos } from '../../../store/state.interface';

@Component({
	selector: 'todo-form',
	templateUrl: 'todo-form.component.html'
})

export class TodoFormComponent {

	@Input() todos: Todos;
	@Output() onAdd: EventEmitter<string> = new EventEmitter();
	@Output() onToggleAll: EventEmitter<any> = new EventEmitter();
	@Output() onDeleteAll: EventEmitter<any> = new EventEmitter();

	text: string;

	/**
	 * Emit submit event and clear input.
	 * @return {void}
	 */
	submit(): void {
		if (!this.text) {
			return;
		}
		this.onAdd.emit(this.text);
		this.text = '';
	}
}