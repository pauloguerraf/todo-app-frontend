export const state = () => ({
  todos: [],
  completedTasks: [],
  uncompletedTasks: [],
  user: {},
})
export const getters = {
  getTodos: (state) => state.todos,
  getCompletedTasks: (state) => state.completedTasks,
  getUncompletedTasks: (state) => state.uncompletedTasks,
  getUser: (state) => state.user,
}

export const actions = {
  async addTodoItem({ commit }, todo) {
    await commit('addTodo', todo)
  },
  async deleteTodoItem({ commit }, id) {
    await commit('removeTodo', id)
  },
}

export const mutations = {
  setTodos: (state, todos) => (state.todos = todos),
  setCompletedTasks: (state, completedTasks) =>
    (state.completedTasks = completedTasks),
  setUncompletedTasks: (state, uncompletedTasks) =>
    (state.setUncompletedTasks = uncompletedTasks),
  setUser: (state, user) => (state.user = user),
  addTodo: (state, todo) => state.todos.push(todo),
  removeTodo: (state, id) =>
    state.todos.splice(
      state.todos.findIndex((el) => el.id === id),
      1
    ),
}
