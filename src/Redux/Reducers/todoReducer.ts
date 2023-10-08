import { CREATE_TODO, UPDATE_TODO, DELETE_TODO } from "../Actions";
import { initialState } from "./initialState";

interface actionType {
  type: string;
  payload: {
    id: number;
    content?: string;
    isClear?: boolean;
  };
}

const todoReducer = (state = initialState, action: actionType) => {
  switch (action.type) {
    case CREATE_TODO:
      return Object.assign({}, state, {
        todo: [...state.todo, action.payload],
      });
    case UPDATE_TODO:
      return Object.assign({}, state, {
        todo: state.todo.map((todo) => {
          if (todo.id === action.payload.id && action.payload.content) {
            todo.content = action.payload.content;
          }
        }),
      });
    case DELETE_TODO:
      return Object.assign({}, state, {
        todo: state.todo.filter((todo) => todo.id !== action.payload.id),
      });
  }
};

export default todoReducer;
