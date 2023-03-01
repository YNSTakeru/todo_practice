import TodoList from "./todoList";

export default class ChangeCompleted {
  public execute(id: number, todoList: TodoList): TodoList {
    const newTodoList = new TodoList([
      ...todoList.dataArray.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      ),
    ]);
    return newTodoList;
  }
}
