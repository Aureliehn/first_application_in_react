import { useState } from "react";
import AddTodo from "./AddTodo";

const Todo = () =>{

    const [todos, setTodos ] = useState([
        {id: 1, todo : 'lorem'},
        {id: 2, todo : 'lorem'},
        {id: 3, todo : 'lorem'}
    ])

    const [warning , setWarning] = useState(false)
    const [btnNew , setbtnNew] = useState(false)

    const todo = todos.map((t)=>{
        return(
            <li className='list-group-item' key={t.id}>{t.todo}</li>
        )
    })

    const addNewTodo=(newTodo)=>{
        if(newTodo !== ''){
            setTodos([...todos,
                {
                    todo: newTodo
                }])
        }
        else{
            setWarning(true)
        }
    }

    const clickNew=()=>{
        setbtnNew(true)
    }
    const formNew = btnNew ? (<AddTodo addNew={addNewTodo}></AddTodo>) : (<button className="btn btn-success" onClick={clickNew}>Ajouter une tâche</button>)
    const alert = warning && (<div className="alert alert-danger" role="alert">entrer une tâche vide n'à aucun intérêt..</div>)
    
    return(
        <div>
            <h2 className="m-3">Tâches à réaliser : {todos.length}</h2>
            {alert}
            <ul className='list-group mb-5'>
                {todo}
            </ul>
            {formNew}
        </div>
    )
}

export default Todo;