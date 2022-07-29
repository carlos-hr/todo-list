import { PlusCircle } from "phosphor-react";
import styles from "./NewTaskForm.module.css";

const NewTaskForm = () => {
  return (
    <form className={styles.newTaskForm}>
      <input placeholder="Adicione uma nova tarefa" />
      <button>
        Criar
        <PlusCircle size={16} />
      </button>
    </form>
  );
};

export default NewTaskForm;
