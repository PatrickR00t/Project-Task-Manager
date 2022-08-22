import React from 'react';

function Task({ tasks, setTasks, setEditTask }) {
  const onRemove = ({ id }) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const onCompleted = (task) => {
    setTasks(tasks.map((item) => {
      if (item.id === task.id) {
        return { ...item, completed: !item.completed }
      }
      return item;
    }))
  }

  const onEdit = ({ id }) => {
    const findTask = tasks.find((task) => task.id === id);
    setEditTask(findTask);
  }

  return(
    <div className="task">
      { tasks.map((task) => (
        <li key={ task.id }>
          <input
            onClick={ () => onCompleted() }
            id="check"
            type="checkbox"
          />
          <input
            type='text'
            value={ task.title }
            onChange={ (event) => event.preventDefault() }
          />
            <button onClick={ () => onEdit(task) }>edit</button>
            <button onClick={ () => onRemove(task) }>delete</button>
        </li>
      ))}
    </div>
  );
}

export default Task;
