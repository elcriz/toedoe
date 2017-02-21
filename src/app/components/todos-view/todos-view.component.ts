import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { StateInterface } from '../../store/state.interface';
import { TodosInterface as Todos, EditTodo } from '../../store/todos/todos.interface';
import { TodosService } from '../../services/todos/todos.service';

@Component({
	templateUrl: 'todos-view.component.html'
})

export class TodosViewComponent {

	todos: Observable<Todos>;

	constructor(
		private todosService: TodosService,
		private store: Store<StateInterface>) {

		// Retrieves todos
		this.todos = this.store.select('todos');
	}

	/**
	 * Dispatches an action to add a new todo.
	 * @param {string} text
	 * @return {void}
	 */
	doAddTodo(text: string): void {
		this.store.dispatch(
			this.todosService.addTodo(text)
		);
	}

	/**
	 * Dispatches an action to edit an existing todo.
	 * @param {EditTodo} todo
	 * @return {void}
	 */
	doEditTodo(todo: EditTodo): void {
		const { id, text } = todo;
		this.store.dispatch(
			this.todosService.editTodo(id, text)
		);
	}

	/**
	 * Dispatches an action to delete a todo.
	 * @param {number} id
	 * @return {void}
	 */
	doDeleteTodo(id: number): void {
		this.store.dispatch(
			this.todosService.deleteTodo(id)
		);
	}

	/**
	 * Dispatches an action to delete all current todos.
	 * @return {void}
	 */
	doDeleteAllTodos(): void {
		this.store.dispatch(
			this.todosService.deleteAllTodos()
		);
	}

	/**
	 * Dispatches an action to toggle a todo.
	 * @param {number} id
	 * @return {void}
	 */
	doToggleTodo(id: number): void {
		this.store.dispatch(
			this.todosService.toggleTodo(id)
		);
	}

	/**
	 * Dispatches an action to toggle all current todos.
	 * @return {void}
	 */
	doToggleAllTodos(): void {
		this.store.dispatch(
			this.todosService.toggleAllTodos()
		);
	}
}