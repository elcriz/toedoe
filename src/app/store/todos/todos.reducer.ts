import { ActionReducer, Action } from '@ngrx/store';
import { TodosActions as Actions } from './todos.actions';
import { TodosInterface as Todos } from './todos.interface';

export const initialTodosState: Todos = {
	items: [],
};

export const todos: ActionReducer<any> = (state: Todos = initialTodosState, action: Action): Todos => {
	switch (action.type) {

		case Actions.TODOS_ADD_TODO:
			return {
				items: [...state.items, ...[{
					id: state.items
						.reduce((maxId, item) => Math.max(item.id, maxId), -1) + 1,
					text: action.payload,
					isCompleted: false
				}]],
				...state
			};

		case Actions.TODOS_EDIT_TODO:
			return {
				...state,
				items: state.items
					.map(item => item.id === action.payload.id
						? {
							...item,
							text: action.payload.text,
							isCompleted: false
						} : item
					)
			};

		case Actions.TODOS_DELETE_TODO:
			return {
				...state,
				items: state.items
					.filter(item => item.id !== action.payload)
			};

		case Actions.TODOS_TOGGLE_TODO:
			return {
				...state,
				items: state.items
					.map(item => item.id === action.payload
						? { ...item, isCompleted: !item.isCompleted }
						: item
					)
			};

		case Actions.TODOS_TOGGLE_ALL_TODOS:
			return {
				...state,
				items: state.items
					.map(item => ({ ...item, isCompleted: !item.isCompleted }))
			};

		case Actions.TODOS_DELETE_ALL_TODOS:
		default:
			return state;
	}
};