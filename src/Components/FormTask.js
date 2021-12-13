import React from "react";

const FormTask = () => {
    return (
        <div>
            <div className="card">
            <div className="card-body">
                <h3 className="card-title text-center">
                    Titulo de tarea
                </h3>
            </div>
            <div className="card-text text-center">
                Descripcion tarea
            </div>
            <hr/>
            <div className="d-flex justify-content-center">
                <button className="btn btn-outline-primary mr-3">Editar</button>
                <button className="btn btn-outline-danger">Eliminar</button>

            </div>

             </div>
        </div>
    )
}

export default  FormTask;