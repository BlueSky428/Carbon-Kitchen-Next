export const ADD_TODO = 'ADD_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'

function addTodo (todo) {
  return {
    type: ADD_TODO,
    todo,
  }
}

function removeTodo (id) {
  return {
    type: REMOVE_TODO,
    id,
  }
}


export function handleDeleteTodo (todo) {
  return (dispatch) => {
    dispatch(removeTodo(todo.id))
    return API.deleteTodo(todo.id)
      .catch(() => {
        dispatch(addTodo(todo))
        alert('An error occurred. Try again.')
      })
  }
}

export function handleAddTodo (name) {
  return (dispatch) => {
    return API.saveTodo(name)
      .then((todo) => {
        dispatch(addTodo(todo))
      })
      .catch(() => alert('There was an error. Try again.'))
  }
}