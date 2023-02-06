import React, { useState } from 'react'; 

// CSS
import styles from './App.module.css'

// Layout
import Footer from './Components/Layout/Footer/Footer';
import Header from './Components/Layout/Header/Header';
import Modal from './Components/Layout/Modal/Modal';
import TaskForm from './Components/Layout/TaskForm/TaskForm';
import TaskList from './Components/Layout/TaskList/TaskList';

// Interfaces
import { ITask } from './interfaces/ITask';

function App() {

  const [taskList, setTaskList] = useState<ITask[]>([]);
  const [taskToUpdate, setTaskToUpdate] = useState<ITask | null>(null)

  const deleteTask = (id: number): void => {
    setTaskList(
      taskList.filter(task => task.id !== id)
    )
  }

  const hideOrShowModal = (display: boolean): void => {
    const modal = document.querySelector("#modal")

    if(display) {
      modal!.classList.remove("hide")
    } else {
      modal!.classList.add("hide")
    }
  }

  const editTask = (task: ITask) => {
    hideOrShowModal(true)
    setTaskToUpdate(task)
  }

  const updateTask = (id: number, title: string, difficulty: number): void => {

    const updateTask: ITask = { id, title, difficulty };

    const updatedItems = taskList.map(task => task.id === updateTask.id? updateTask : task)
    setTaskList(updatedItems)

    hideOrShowModal(false)

  }

  return (
    <div className="App">
      <Modal children={<TaskForm 
                        btnText='Editar Tarefa' 
                        taskList={taskList} 
                        task={taskToUpdate} 
                        handleUpdate={updateTask}
                      />} 
      />
      <Header />
      <main className={styles.main}>
        <div>
          <h2>O que você vai fazer?</h2>
          <TaskForm 
            btnText='Criar Tarefa' 
            taskList={taskList} 
            setTaskList={setTaskList} />
        </div>
        <div>
          <h2>Sua tarefas:</h2>
          <TaskList 
            taskList={taskList} 
            handleDelete={deleteTask} 
            handleEditTask={editTask} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
