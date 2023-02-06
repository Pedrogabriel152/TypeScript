import React, { useState, ChangeEvent, FormEvent, useEffect  } from "react";

// CSS
import styles from './TaskForm.module.css';

// Interfaces
import { ITask } from '../../../interfaces/ITask';

interface Props {
    btnText: string;
    taskList: ITask[];
    task?: ITask | null;
    handleUpdate?(id: number, title: string, difficulty: number): void;
    setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>
}

const TaskForm = ({ btnText, taskList, setTaskList, task, handleUpdate }: Props) => {

    const [id, setId] = useState<number>(0)
    const [title, setTitle] = useState<string>('')
    const [difficulty, setDifficulty] = useState<number>(0)

    const addTaskHandle = (e: FormEvent<HTMLFormElement>) => {
        
        e.preventDefault();
        if(handleUpdate) {

            handleUpdate(id, title, difficulty)

        } else {
            const id: number = Math.floor(Math.random() * 10000)
            const newTask: ITask = { id, title, difficulty }

            setTaskList!([...taskList, newTask])
            
            setTitle('')
            setDifficulty(0)

            return
        }

    };

    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        if(e.target.name === `title`) {
            setTitle(e.target.value)
        } else {
            setDifficulty(parseInt(e.target.value))
        }
    }

    useEffect(() => {

        if(task) {
            setId(task.id)
            setTitle(task.title)
            setDifficulty(task.difficulty)
        }

    }, [task])

    return (
        <form onSubmit={addTaskHandle} className={styles.form}>
            <div className={styles.input_container}>
                <label htmlFor="title"></label>
                <input 
                    type="text" 
                    name="title" 
                    placeholder="Titulo da tarefa" 
                    onChange={handleOnChange} 
                    value={title}
                />
            </div>
            <div className={styles.input_container}>
                <label htmlFor="difficulty"></label>
                <input 
                    type="text" 
                    name="difficulty" 
                    placeholder="Dificuldade da tarefa" 
                    onChange={handleOnChange} 
                    value={difficulty}
                />
            </div>

            <input type="submit" value={btnText} />
        </form>
    )
}

export default TaskForm