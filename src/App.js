import './App.css';
import Header from "./MyComponents/Header/Header";
import { Todos } from "./MyComponents/Todos";
import { Footer } from "./MyComponents/Footer/Footer";
import { AddTodo } from "./MyComponents/ToDos/AddTodo";
import { About } from "./MyComponents/AboutUs/About";
import React, { useState, useEffect } from 'react';
import { HttpRequest } from './MyComponents/FirebaseApi/HttpRequest';
import Contactus from "./MyComponents/Contactus"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])


  const onDelete = (todo) => {
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title, desc) => {
    let sno;
    if (todos.length === 0) {
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
    setTodos([...todos, myTodo]);
    console.log( {
      sno: sno,
      title: title,
      desc: desc,
    })
    HttpRequest(
      {
        sno: sno,
        title: title,
        desc: desc,
      }
    );
    }


  return ( 
    <> 
    <Router>
      <Header title="My Todos List"  /> 

      <Switch>
          <Route exact path="/" render={()=>{
            return(
            <>
            <AddTodo addTodo={addTodo} />
            <Todos todos={todos} onDelete={onDelete}  /> 
            </>)
          }}> 
          </Route>
          <Route exact path="/about">
            <About />
          </Route> 
          <Route exact path="/contact-us">
            <Contactus />
          </Route> 
        </Switch> 

      <Footer />
    </Router>
    </>
  );
}

export default App;
