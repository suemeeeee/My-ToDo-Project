export const CREATE_TODO = "ADD_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const DELETE_ALL_TODO = "DELETE_ALL_TODO";

export const createTodo = (id: number, content: string) => {
  return {
    type: CREATE_TODO,
    payload: {
      id: id,
      content: content,
      isClear: false,
    },
  };
};

// 이미 클리어 된 todo는 수정 불가하도록
export const updateTodo = (id: number, editContent: string) => {
  return {
    type: UPDATE_TODO,
    payload: {
      id: id,
      content: editContent,
      isClear: false,
    },
  };
};

export const deleteTodo = (id: number) => {
  return {
    type: DELETE_TODO,
    payload: {
      id: id,
    },
  };
};

export const deleteAllTodo = () => {
  return {
    type: DELETE_ALL_TODO,
  };
};
