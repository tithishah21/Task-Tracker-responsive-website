//rafc
import React from 'react';
import "./TodoItemCSS.css";

export const TodoItem = ({todo , onDelete}) => {
  return (
    <div>
      
      <h4>{"• "}{todo.title}</h4>
      <p>{todo.desc}</p><br/>
      <button className="todobutton" id="bttn" onClick={()=>onDelete(todo)}>DELETE</button>
      <br/><hr/>
    </div>
  )
}


