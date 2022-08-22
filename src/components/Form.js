import React from 'react';
import generator from '../lib/generator';

function Form({ input, setInput, tasks, setTasks, editTask, setEditTask }) {

  const onInputChange = ({ target }) => {
    setInput(target.value);
  };

  const updateTask = (title, id, completed) => {
    const newTask = tasks.map((task) => (
      task.id === id ? { title, id, completed } : task
    ));
    setTasks(newTask);
    setEditTask('');
  }

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (!editTask) {
      const { randomId } = generator;
      setTasks([...tasks, { id: randomId(9999999), title: input, completed: false }]);
      setInput('');
    } else {
      updateTask(input, editTask.id, editTask.completed)
    }
  };

  return(
    <form onSubmit={ onFormSubmit } className="form">
      <input
        type='text'
        placeholder='Enter a Task'
        className='task-input'
        value={ input }
        required
        onChange={ onInputChange }
      />
      <button
        type='submit'
        className='button-add'
      >Add Task</button>
    </form>
  );
}

export default Form;
