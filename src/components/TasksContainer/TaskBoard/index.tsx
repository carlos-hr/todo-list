import { ClipboardText, Trash } from "phosphor-react";
import styles from "./TaskBoard.module.css";

interface Task {
  id: number;
  description: string;
  isComplete: boolean;
}

interface TaskBoardProps {
  tasks: Task[];
  onToggleTask: (id: number) => void;
}

const TaskBoard = ({ tasks, onToggleTask }: TaskBoardProps) => {
  const totalTasks = tasks.length;
  const completedTasks = tasks.reduce((acc, state) => {
    if (state.isComplete) {
      acc++;
    }
    return acc;
  }, 0);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <p>
          Tarefas criadas <span className={styles.counter}>{totalTasks}</span>
        </p>
        <p>
          Concluídas <span className={styles.counter}>{completedTasks}</span>
        </p>
      </header>

      {totalTasks === 0 ? (
        <div className={styles.emptyBoard}>
          <ClipboardText size={56} />
          <div className={styles.boardText}>
            <p>Você ainda não tem tarefas cadastradas</p>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        </div>
      ) : (
        <div className={styles.taskList}>
          {tasks.map((task) => (
            <div className={styles.task} key={task.id}>
              <input type="checkbox" onChange={() => onToggleTask(task.id)} />
              <p className={task.isComplete ? styles.strikethroughText : ""}>
                {task.description}
              </p>
              <button>
                <Trash size={20} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TaskBoard;
