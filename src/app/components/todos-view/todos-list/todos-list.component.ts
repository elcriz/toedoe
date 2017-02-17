import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo, EditTodo } from '../../../store/todos/todos.interface';

@Component({
	selector: 'todos-list',
	template: `
	<ul>
		<li *ngFor="let item of todos">
			<todo
				[item]="item""
				(onEdit)="onEdit.emit($event)"
				(onToggle)="onToggle.emit($event)"
				(onDelete)="onDelete.emit($event)">
			</todo>
		</li>
	</ul>
	`
})

export class TodosListComponent {

	@Input() todos: Array<Todo>;
	@Output() onEdit: EventEmitter<EditTodo> = new EventEmitter();
	@Output() onToggle: EventEmitter<number> = new EventEmitter();
	@Output() onDelete: EventEmitter<number> = new EventEmitter();
}