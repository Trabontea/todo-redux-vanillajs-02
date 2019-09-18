import types from '/actionTypes.js'

const  actions = {
  addTodo: (text) => ({
    type: types.ADD_TODO,
    text
	}),
  toggleDone: (id) => ({
    type: types.TOGGLE_DONE,
    id
  }),
  clearTodos: () =>({
    type: types.CLEAR_TODOS
  })
};

export default actions;