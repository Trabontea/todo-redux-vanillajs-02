import types from '/actionTypes.js';

const initialState = {
  todos: [{ id: 123456789, text: "my first todo", done: false }],
  showCompleted: true
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case types.ADD_TODO: {
      const newTodo = { id: Date.now(), text: action.text, done: false }
      console.log('newTodo: ', newTodo);

      const newTodos = [...state.todos, newTodo];
      return { ...state, todos: newTodos };
    }
    case types.TOGGLE_DONE: {
      const newTodos = state.todos.map(todo =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
      return { ...state, todos: newTodos };
    }
    case types.CLEAR_TODOS:
        const newTodos= state.todos.filter((todo) => {
          return !todo.done;
        });
      return { ...state, todos: newTodos };
    case "TOGGLE_COMPLETED":
      return { ...state, showCompleted: !state.showCompleted };
    default:
      return state;
  }
}

export default reducer;