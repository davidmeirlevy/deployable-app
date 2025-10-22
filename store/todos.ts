class TodoStore {
  todos: any[] = [];
  currentId: number = 1;

  getAll() {
    return this.todos;
  }

  getById(id) {
    return this.todos.find(todo => todo.id === id);
  }

  create(title, description = '') {
    const todo = {
      id: this.currentId++,
      title,
      description,
      completed: false,
      createdAt: new Date().toISOString()
    };
    this.todos.push(todo);
    return todo;
  }

  update(id, updates) {
    const index = this.todos.findIndex(todo => todo.id === id);
    if (index === -1) return null;
    
    this.todos[index] = {
      ...this.todos[index],
      ...updates,
      id // Prevent ID from being changed
    };
    return this.todos[index];
  }

  delete(id) {
    const index = this.todos.findIndex(todo => todo.id === id);
    if (index === -1) return false;
    
    this.todos.splice(index, 1);
    return true;
  }
}

export default new TodoStore();
