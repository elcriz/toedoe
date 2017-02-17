export interface TodosInterface {
	items: Array<Todo>;
}

export interface Todo {
	id: number;
	text: string;
	isCompleted: boolean;
}

export interface EditTodo {
	id: number;
	text: string;
}