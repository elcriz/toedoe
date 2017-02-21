import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Todo, EditTodo } from '../../../../store/todos/todos.interface';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Component({
	selector: 'todo',
	templateUrl: 'todo.component.html'
})

export class TodoComponent implements OnInit {

	@Input() item: Todo;
	@Output() onEdit: EventEmitter<EditTodo> = new EventEmitter();
	@Output() onToggle: EventEmitter<number> = new EventEmitter();
	@Output() onDelete: EventEmitter<number> = new EventEmitter();

	text: FormControl = new FormControl();
	editSubscriber: Subscription;

	/**
	 * Debounce todo text input upon component init.
	 * @return {void}
	 */
	ngOnInit(): void {
		const { id } = this.item;
		this.editSubscriber = this.text.valueChanges
			.debounceTime(750)
			.distinctUntilChanged()
			.subscribe(value =>
				this.onEdit.emit({ id, text: value }));
	}

	/**
	 * Unsubscribe from debounce subscriber upon component destroy.
	 * @return {void}
	 */
	ngOnDestroy(): void {
		this.editSubscriber.unsubscribe();
	}
}