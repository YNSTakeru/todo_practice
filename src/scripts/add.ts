import Todo from "./todo";
import TodoList from "./todoList";

export default class Add {
  public execute(todo: Todo, todoList: TodoList): TodoList {
    const newTodoList = new TodoList([...todoList.dataArray, todo]);
    return newTodoList;
  }
}
