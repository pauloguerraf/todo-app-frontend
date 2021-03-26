export default {
  addLocalTodo(state, payload) {
    state.localTodos.push(payload)
    // console.log(JSON.parse(payload.get('data')).title)

    localStorage.setItem('localTodos', state.localTodos)
    // await this.$strapi.$todos.create(payload)
  },
  deleteLocalTodo(state, id) {
    state.localTodos = state.localTodos.filter((el) => el.id === id)
    console.log(state.localTodos)
  },
  setLocalUser(state, payload) {
    localStorage.setItem('localUser', payload)
    state.localUser = payload
  },
}
