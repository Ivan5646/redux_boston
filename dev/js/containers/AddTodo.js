import AddTodoForm from '../components/AddTodoForm'

import { connect } from 'react-redux'
import { addTodo } from '../actions'

// implement and send onSubmit callback as a property to Presentation component
const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (text) => {
      dispatch(addTodo(text))
    }
  }
}

// connect Redux to the Container and wrap "AddTodoForm" presentation component 
let AddTodo = connect(null, mapDispatchToProps)(AddTodoForm)

export default AddTodo
