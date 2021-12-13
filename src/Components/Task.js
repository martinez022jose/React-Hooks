import React from "react";

const Task = (props) => {
    return (
        <div>
            <div className="card">
            <div className="card-body">
                <h3 className="card-title text-center">
                    {
                      props.task.title
                    }<button className="btn btn-outline-primary rounded-circle" onClick={()=>{props.fState(props.task.id)}}>{
                        props.task.state? 'Terminado' : 'chiques'
                        
                    }</button>
                </h3>
            </div>
            
            <div className="card-text text-center">
                {props.task.desc}
            </div>
            <hr/>
            <div className="d-flex justify-content-center">
                <button className="btn btn-outline-primary mr-3">Editar</button>
                <button className="btn btn-outline-danger" onClick={()=>{props.fDelete(props.task.id)}}> Eliminar</button>

            </div>

             </div>
        </div>
    )
}

export default Task;