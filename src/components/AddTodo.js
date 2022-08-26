import { useState } from "react"

const AddTodo = ({addNew})=>{

    const [ addTodo, setAddTodo] = useState('')

    const handleTodo = (e)=>{
        e.preventDefault()
        addNew(addTodo)
    }
    return(
        <form onSubmit={handleTodo}>
            <div>
                <label>Ajouter une tâche</label>
                <input type="text" value={addTodo} onChange={(e)=>setAddTodo(e.target.value)}></input>
                <input type="submit"></input>
            </div>
        </form>
    )
}

export default AddTodo