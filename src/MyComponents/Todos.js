import React from 'react'
import {TodoItem} from "./ToDos/TodoItem";

export const Todos = (props) => {
    let myStyle = {
        minHeight: "70vh",
        margin: "40px auto"
    }
    // console.log(props.style)
    return (
        <div className="container" style={myStyle}>
            <h3 className="my-3 " style={{ textDecoration:"underline", color: "green", fontFamily:"italic"}}> <b>Todos List</b> </h3>
            {props.todos.length===0? "No Todos to display":  
            props.todos.map((todo)=>{
                return (<TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} style={props.style}/>   
                )
            })
              } 
        </div>
    )
}
