export const Task=(props)=>{
    return (
        <div className="lists" style={{backgroundColor:props.completed?"green":"#2F0A28"}}>
                <div className="task">
                    <p>{props.taskName}</p>
                </div>
                  
                  <div className="Button">
                  <button className="completed" onClick={()=>{
                    props.completeTask(props.id);
                    }}>Completed</button>
                  <button className="Delete" onClick={()=>props.deleteTask(props.id)}>Delete</button>
                  </div>
                  
                </div>
    )
}
