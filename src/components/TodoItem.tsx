import React from "react";
import {ITodo} from "../types/types";

interface ITodoProps {
	todo: ITodo
}

const TodoItem: React.FC<ITodoProps> = ({todo}) => {
	return (
		<div>
			<input checked={todo.completed} type='checkbox' />
			{todo.id}. {todo.title}
		</div>
	);
};

export default TodoItem;