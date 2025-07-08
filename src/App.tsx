import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { Task } from "./components/Task";
import clipboard from "./assets/clipboard.png";

import styles from "./App.module.scss";
import "./global.scss";

interface ITask {
  id: string;
  title: string;
  isComplete: boolean;
}

export function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);

  function handleAddTask(newTask: string) {
    if (newTask == "") return;
    const task = {
      id: uuidv4(),
      title: newTask,
      isComplete: false,
    };
    setTasks([...tasks, task]);
  }

  function toggleTaskCompletion(taskId: string) {
    const newArray = [...tasks];

    const foundIndex = newArray.findIndex((el) => {
      if (el.id === taskId) return el;
    });

    newArray[foundIndex].isComplete = !newArray[foundIndex].isComplete;

    const foundElement = newArray[foundIndex];

    newArray.splice(foundIndex, 1);

    newArray.push(foundElement);

    setTasks(newArray);
  }

  function deleteById(id: string) {
    setTasks((oldArray) => {
      return oldArray.filter((task) => task.id !== id);
    });
  }

  const taskArray = [...tasks];

  const doneTasks = taskArray.filter((task) => task.isComplete);

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Input inputFunction={(newTask) => handleAddTask(newTask)} />
      </div>

      <div className={styles.container}>
        <div className={styles.main}>
          <div className={styles.tasksCreated}>
            <h3>Tarefas criadas</h3>
            <span>{tasks.length}</span>
          </div>

          <div className={styles.tasksDone}>
            <h3>Concluídas</h3>
            <span>
              {doneTasks.length} de {tasks.length}
            </span>
          </div>
        </div>

        {tasks.length > 0 ? (
          <div>
            {tasks.map((task) => (
              <Task
                id={task.id}
                key={task.id}
                title={task.title}
                isComplete={task.isComplete}
                taskFunction={() => toggleTaskCompletion(task.id)}
                taskDeleteFn={() => deleteById(task.id)}
              />
            ))}
          </div>
        ) : (
          <div className={styles.mainEmpty}>
            <img src={clipboard} alt="Clipboard" />

            <div className={styles.mainEmptyText}>
              <h3>Você ainda não tem tarefas cadastradas</h3>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
