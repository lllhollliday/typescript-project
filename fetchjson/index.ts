import axios from "axios"

const url = "https://jsonplaceholder.typicode.com/todos/1"

axios.get(url).then((res) => {
  const todo = res.data as Todo

  interface Todo {
    // interface is used to define the structure of an object
    id: number
    title: string
    completed: boolean
  }

  console.log(res.data)

  const id = todo.id
  const title = todo.title
  const completed = todo.completed

  logTodo(id, title, completed)
})

const logTodo = (id: number, title: string, completed: boolean) => {
  // define the type of data here, so ts can check if they match / are in the right order and can execute
  console.log(`
    The Todo with ID: ${id}
    Has a title of: ${title}
    Is it finished? ${completed}
    `)
}
