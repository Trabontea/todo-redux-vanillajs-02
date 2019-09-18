import reducer from '/reducer.js';
import actions from '/actions.js'


const store = window.Redux.createStore(reducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// re-render the todos whenever state changes: NOT IDEAL
store.subscribe(renderTodos); 

const form = document.querySelector("#add-todo");
const todosContainer = document.querySelector("#todos-container");
const clearButton = document.querySelector("#clear-todos");

form.addEventListener("submit", event => {
  event.preventDefault();
  const text = event.target.elements.todoText.value;

  console.log("text", text);
  //dispatch action addTodo
  store.dispatch(actions.addTodo(text));

  //golire form
  event.target.elements.todoText.value = '';
});



function renderTodos() {
  todosContainer.innerHTML = ""; // NOT IDEAL 👀
  const { todos } = store.getState();
  todos.forEach(todo => {
    console.log('todo: ', todo);


    const el = document.createElement("li");
    const span = document.createElement("span");
   
    //add text in span
    span.textContent = todo.text;
   
    if (todo.done) el.style.textDecoration = "line-through";
    const btn = document.createElement("button");
    btn.textContent = "Done";

    //add clases
    btn.classList.add('btn-primary', 'btn');
    el.classList.add('list-group-item');
    
    btn.addEventListener("click", () =>
      store.dispatch(actions.toggleDone(todo.id))
    );
    el.appendChild(span)
    el.appendChild(btn);
    todosContainer.appendChild(el);
  });
}


clearButton.addEventListener("click", () =>
  store.dispatch(actions.clearTodos())
);

renderTodos(); // initialise
