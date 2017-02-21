import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo, EditTodo } from '../../../store/todos/todos.interface';

@Component({
	selector: 'todos-list',
	templateUrl: 'todos-list.component.html'
})

export class TodosListComponent {

	@Input() todos: Array<Todo>;
	@Output() onEdit: EventEmitter<EditTodo> = new EventEmitter();
	@Output() onToggle: EventEmitter<number> = new EventEmitter();
	@Output() onDelete: EventEmitter<number> = new EventEmitter();
}