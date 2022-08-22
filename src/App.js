import React, { useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Task from './components/Task';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [tasks, setTasks] = useState([]);
  const [editTask, setEditTask] = useState(null);
  return(
    <div className='container'>
      <div className='app-wrapper'>
        <div>
          <Header />
        </div>
        <div>
          <Form
            input={ input }
            setInput={ setInput }
            tasks={ tasks }
            setTasks={ setTasks }
            editTask={ editTask }
            setEditTask={ setEditTask }
          />
        </div>
        <div>
          <Task
            tasks={ tasks }
            setTasks={ setTasks }
            setEditTask={ setEditTask }
          />
        </div>
      </div>
    </div>
  );
}

export default App;
