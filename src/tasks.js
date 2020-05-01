import React from 'react'
import userTasks from './services'

export default function Tasks() {
    return (
        <div>
            {userTasks.map(tasks => (
          <div key={tasks.id}>
            <h2>{tasks.headline}</h2>
            <p>{tasks.todo}</p>
          </div>
        ))}
        </div>
    )
}
