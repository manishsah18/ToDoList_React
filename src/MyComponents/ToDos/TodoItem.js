import React from 'react'
import "./TodoItem.css"

export const TodoItem = ({todo, onDelete, style}) => {

    // console.log(style)
    return (
        <>
        <div className="">
            <div className={style}>
           <h4>Title : {todo.title}</h4>
           <p>Description : {todo.desc}</p>
           {/* <p>Date : {todo.date}</p> */}
           </div>
           <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button>          
        </div>
        <hr/> 
        </>
    )
}
