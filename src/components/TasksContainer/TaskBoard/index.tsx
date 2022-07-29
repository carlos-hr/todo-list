import { ClipboardText, Trash } from "phosphor-react";
import styles from "./TaskBoard.module.css";

const TaskBoard = () => {
  let counter = 1;
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <p>
          Tarefas criadas <span className={styles.counter}>{counter}</span>
        </p>
        <p>
          Concluídas <span className={styles.counter}>{counter}</span>
        </p>
      </header>

      {counter === 0 ? (
        <div className={styles.emptyBoard}>
          <ClipboardText size={56} />
          <div className={styles.boardText}>
            <p>Você ainda não tem tarefas cadastradas</p>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        </div>
      ) : (
        <div className={styles.taskList}>
          <div className={styles.task}>
            <input type="checkbox" />
            <p className={styles.strikethroughText}>
              Integer urna interdum massa libero auctor neque turpis turpis
              semper. Duis vel sed fames integer.
            </p>
            <button>
              <Trash size={20} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskBoard;
