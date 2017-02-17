import { combineReducers, Action } from '@ngrx/store';
import { todos } from './todos/todos.reducer';

import 'rxjs/add/operator/take';

export const rootReducer = (state, action: Action) => {
	const storeLogger = (state, action: Action, appReducer: any) => {
		const reduced = appReducer(state, action);

		// Logs state changes to console if environment is not build
		if (process.env.ENV !== 'build') {
			console.info('PREV state: ', state);
			console.info(action.type, action.payload);
			console.info('NEXT state: ', reduced);
		}

		return reduced;
	};

	state = action.type === 'ACTION_RESET_FULL_STATE' ? undefined : state;
	let reducer = storeLogger(state, action, combineReducers({
		todos
	}));

	return reducer;
};