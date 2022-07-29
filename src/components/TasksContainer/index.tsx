import { FormEvent, useState } from "react";
import NewTaskForm from "./NewTaskForm";
import TaskBoard from "./TaskBoard";

type Task = {
  id: number;
  description: string;
  isComplete: boolean;
};

const TasksContainer = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState("");

  const onAddTask = (e: FormEvent) => {
    e.preventDefault();
    setTasks([
      ...tasks,
      {
        id: tasks.length + 1,
        description: newTask,
        isComplete: false,
      },
    ]);
    setNewTask("");
  };

  const onToggleTask = (id: number) => {
    const taskStatus = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, isComplete: !task.isComplete };
      }
      return task;
    });

    setTasks(taskStatus);
  };

  console.log(tasks);
  return (
    <>
      <NewTaskForm
        setNewTask={setNewTask}
        newTask={newTask}
        onAddTask={onAddTask}
      />
      <TaskBoard tasks={tasks} onToggleTask={onToggleTask} />
    </>
  );
};

export default TasksContainer;
