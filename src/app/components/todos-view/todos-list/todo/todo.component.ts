import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Todo, EditTodo } from '../../../../store/todos/todos.interface';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Component({
	selector: 'todo',
	template: `
	<div class="todo"
		[ngClass]="{ 'is-completed': item.isCompleted }">
		<input class="todo__text-input"
			#todoText
			[formControl]="text"
			type="text"
			value="{{ item.text }}">
		<div class="todo__actions">
			<button class="todo__toggle-button button"
				type="button"
				(click)="onToggle.emit(item.id)">
				<template [ngIf]="!item.isCompleted">Complete</template>
				<template [ngIf]="item.isCompleted">Uncomplete</template>
			</button>
			<button class="todo__delete-button button"
				type="button"
				(click)="onDelete.emit(item.id)">Delete
			</button>
		</div>
	</div>
	`
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
			.debounceTime(500)
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