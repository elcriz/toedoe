import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../../store/todos/todos.interface';

@Component({
	selector: 'todo-form',
	template: `
	<form (ngSubmit)="submit()">
		<input name="text" [(ngModel)]="text">
		<button type="submit">Add todo</button>
	</form>
	<div *ngIf="todos.items.length">
		<button type="button"
			(click)="onTogglelAll.emit($event)">Toggle all todos
		</button>
		<button type="button"
			(click)="onDeleteAll.emit($event)">Delete all todos
		</button>
	</div>
	`
})

export class TodoFormComponent {

	@Input() todos: Array<Todo>;
	@Output() onAdd: EventEmitter<string> = new EventEmitter();
	@Output() onToggleAll: EventEmitter<any> = new EventEmitter();
	@Output() onDeleteAll: EventEmitter<any> = new EventEmitter();

	text: string;

	submit(): void {
		if (!this.text) {
			return;
		}
		this.onAdd.emit(this.text);
		this.text = '';
	}
}