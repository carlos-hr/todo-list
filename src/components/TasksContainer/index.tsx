import { FormEvent, useState } from "react";
import NewTaskForm from "./NewTaskForm";
import TaskBoard from "./TaskBoard";

type Task = {
  id: number;
  task: string;
};

const TasksContainer = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState("");

  const addTask = (e: FormEvent) => {
    e.preventDefault();
    setTasks([
      ...tasks,
      {
        id: tasks.length + 1,
        task: newTask,
      },
    ]);
    setNewTask("");
  };

  return (
    <>
      <NewTaskForm
        setNewTask={setNewTask}
        newTask={newTask}
        addTask={addTask}
      />
      <TaskBoard />
    </>
  );
};

export default TasksContainer;
