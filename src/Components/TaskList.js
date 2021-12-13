import React from 'react'
import Task from './Task'


const TaskList = ({tasks, fDelete, fState})=> {

    return (
        <div>
            {
                tasks.map(task => <Task task={task} key={task.id} fDelete={fDelete} fState={fState} />)
            }
        </div>
    )
}

export default TaskList
