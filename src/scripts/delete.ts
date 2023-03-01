import TodoList from "./todoList";

export default class Delete {
  public execute(id: number, todoList: TodoList): TodoList {
    const newTodoList = new TodoList([
      ...todoList.dataArray.filter((todo) => todo.id !== id),
    ]);
    return newTodoList;
  }
}
