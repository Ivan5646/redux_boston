import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ onClick, completed, text }) => ( // where are these arguments passed? in TodoList.js I see only onClick
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
