import { PlusCircle } from "phosphor-react";
import { FormEvent } from "react";
import styles from "./NewTaskForm.module.css";

interface NewTaskFormProps {
  addTask: (e: FormEvent) => void;
  newTask: string;
  setNewTask: (e: string) => void;
}

const NewTaskForm = ({ addTask, newTask, setNewTask }: NewTaskFormProps) => {
  return (
    <form className={styles.newTaskForm} onSubmit={(e) => addTask(e)}>
      <input
        placeholder="Adicione uma nova tarefa"
        onChange={(e) => setNewTask(e.target.value)}
        value={newTask}
      />
      <button type="submit">
        Criar
        <PlusCircle size={16} />
      </button>
    </form>
  );
};

export default NewTaskForm;
