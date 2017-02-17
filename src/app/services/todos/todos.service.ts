import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { TodosActions as Actions } from '../../store/todos/todos.actions';

@Injectable()

export class TodosService {

	/**
	 * Add a new todo.
	 * @param {string} text
	 * @return {Action}
	 */
	addTodo(text: string): Action {
		return {
			type: Actions.TODOS_ADD_TODO,
			payload: text
		};
	}

	/**
	 * Edit an exisiting todo by its id.
	 * @param {number} id
	 * @param {string} text
	 * @return {Action}
	 */
	editTodo(id: number, text: string): Action {
		return {
			type: Actions.TODOS_EDIT_TODO,
			payload: { id, text }
		};
	}

	/**
	 * Delete a todo by its id.
	 * @param {number} id
	 * @return {Action}
	 */
	deleteTodo(id: number): Action {
		return {
			type: Actions.TODOS_DELETE_TODO,
			payload: id
		};
	}

	/**
	 * Delete all current todos.
	 * @return {Action}
	 */
	deleteAllTodos(): Action {
		return {
			type: Actions.TODOS_DELETE_ALL_TODOS
		};
	}

	/**
	 * Toggle a todo by its id.
	 * @param {number} id
	 * @return {Action}
	 */
	toggleTodo(id: number): Action {
		return {
			type: Actions.TODOS_TOGGLE_TODO,
			payload: id
		};
	}

	/**
	 * Toggle all current todos.
	 * @return {Action}
	 */
	toggleAllTodos(): Action {
		return {
			type: Actions.TODOS_TOGGLE_ALL_TODOS
		};
	}
}