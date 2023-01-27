import { Check, Trash } from 'phosphor-react';
import styles from './Task.module.scss';

interface taskProps {
  id: string;
  title: string;
  isComplete: boolean;
  taskFunction: () => void
  taskDeleteFn: () => void
}

export function Task({ id, title, isComplete, taskFunction, taskDeleteFn }: taskProps) {
  return (
    <div className={styles.task}>
      {!isComplete ? (
      <button className={styles.unchecked} onClick={taskFunction}>
        <Check size={12} weight={'bold'} />
      </button>) : (
      <button className={styles.checked} onClick={taskFunction}>
        <Check size={12} weight={'bold'} />
      </button>)}

      <p className={isComplete ? styles.textCompleted : ''}>{title}</p>
    
      <button className={styles.deleteTask} onClick={taskDeleteFn}>
        <Trash size={18} />
      </button>
    </div>
  );
}
