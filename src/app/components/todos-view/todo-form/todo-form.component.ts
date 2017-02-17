import { Component, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'todo-form',
	template: `
	<form (ngSubmit)="submit()">
		<input name="text"
			[(ngModel)]="text">
		<button type="submit"">Add todo</button>
	</form>
	<div>
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