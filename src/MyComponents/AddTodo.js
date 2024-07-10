import React, { useState, useSyncExternalStore } from 'react'
import "./addd.css"

export const AddTodo = (props) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit=(e)=>{
        e.preventDefault(); //which will not allow page to reload
        if(!title || !desc){
            alert("Title or Description can't be blank")
        }
        props.addTodo(title,desc);
    }
    return (
        <form onSubmit={submit} >
            <div className="input-container">
                <input
                    className="input"
                    name="text"
                    type="text"
                    value={title} onChange={(e)=>{setTitle(e.target.value)}}
                    placeholder="Enter Task Title...."
                />
            </div>
            <br />
            <div className="input-container">
                <input
                    className="input"
                    name="text"
                    type="text"
                    value={desc} onChange={(e)=>{setDesc(e.target.value)}}
                    placeholder="Enter Task Description"
                />
            </div><br />
            <button className="button" type="submit">
                ADD TASK
            </button>
        </form>
    )
}


