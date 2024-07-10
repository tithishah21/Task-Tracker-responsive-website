
import './App.css';
import Header from "./MyComponents/Header";
import Footer from "./MyComponents/Footer";
import Todos from "./MyComponents/Todos";
import React, { useState } from 'react';
import { AddTodo } from './MyComponents/AddTodo';


function App() {


  const onDelete = (todo) => {
    console.log("I am on delete", todos);


    setTodos(todos.filter((e) => {
      return e !== todo;
    }))

  }

  const addTodo = (title, desc) => {
    console.log("i am adding this todo", title, desc)
    let sno;
    if (todos.length == 0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo])
    console.log(myTodo);
  }


  //using state hook as deleting using splice method won;t work
  const [todos, setTodos] = useState([{
    sno: 1,
    title: "Dentist",
    desc: "Take the appointment and visit dentist this Saturday.Ask about aligners' removal."
  }
  ]);
  return (
    <>

      <Header title="my todos list" />
      <div style={{ paddingTop: '60px' }} />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
