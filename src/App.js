
import './App.css';
import Header from "./MyComponents/Header";
import Footer from "./MyComponents/Footer";
import Todos from "./MyComponents/Todos";
import React, { useState } from 'react';
import {AddTodo} from './MyComponents/AddTodo'; 

function App() {
    const onDelete=(todo) =>{
      console.log("I am on delete",todos);
      
  
  setTodos(todos.filter((e)=>{
    return  e!==todo;
  }))

}
//using state hook as deleting using splice method won;t work
const [todos, setTodos] = useState( [{
    sno: 1,
    title: "Dentist",
    desc:"Take the appointment and visit dentist this Saturday.Ask about aligners' removal."
  },
  {
    sno:2,
    title:"Mall",
    desc:"Buy belt, Steve Madam shoes , Gucci Perfume & Zara's heels."
  },
  {
    sno:3,
    title:"Gym",
    desc:"workout & have a proper physique."
  }]);
  return (
    <>
      
      <Header title="my todos list"/>
      <div style={{ paddingTop: '60px' }}/>
      <AddTodo/>
      <Todos todos={todos} onDelete={onDelete}/>
      <Footer/>
    </>
  );
}

export default App;
