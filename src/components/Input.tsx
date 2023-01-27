import { PlusCircle } from 'phosphor-react';
import { useState } from 'react';
import styles from './Input.module.scss';

interface inputProps {
  inputFunction: (task: string) => void;
}

export function Input({ inputFunction }: inputProps) {
  const [inputValue, setInputValue] = useState('');
  
  const handleClick = () => {
    inputFunction(inputValue)
    setInputValue('');
  };

  return (
    <div className={styles.inputDiv}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={inputValue}
        onChange={(task) => setInputValue(task.target.value)}
        onKeyDown={(task) => {
          if (task.code === 'Enter' || task.code === 'NumpadEnter') {
            handleClick();
          }
        }}
      />
      <button type="submit" onClick={handleClick}>
        Criar
        <PlusCircle size={20} />
      </button>
  </div>
  )
}