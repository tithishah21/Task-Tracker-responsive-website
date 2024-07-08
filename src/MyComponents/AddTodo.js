import React from 'react'
import "./addd.css"

export const AddTodo = () => {
    return (
        <div>
            <div class="input-container">
                <input
                    class="input"
                    name="text"
                    type="text"
                    placeholder="Enter Task Title...."
                />
            </div>
            <br/>
            <div class="input-container">
                <input
                    class="input"
                    name="text"
                    type="text"
                    placeholder="Enter Task Description"
                />
            </div>
        </div>
        
        
    )
}


