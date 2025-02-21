import { useEffect, useRef, useState } from 'react';
import { taskInterface } from '../../data/tasks';
import { todoContextInterface } from '../context/todo';
import useLocalStorage from './useLocalStorage';

export interface addTaskArgs {
  name: string;
  description: string;
  dueDate: string;
  priority: 'high' | 'medium' | 'low';
}

const useTodo = (): todoContextInterface => {
  const [tasks, setTasks] = useLocalStorage<taskInterface[]>('tasks', []);
  const [editKey, setEditKey] = useState<number | undefined>();
  const editElement = useRef<HTMLInputElement>(null);

  const addTask = (task: addTaskArgs): void => {
    setTasks([
      ...tasks,
      {
        ...task,
        id: new Date().getTime(),
        createdDate: new Date().toUTCString(),
        modifiedDate: new Date().toUTCString(),
      },
    ]);
  };

  const removeTask = (taskId: number): void => {
    setTasks(tasks.filter((t) => t.id !== taskId));
    if (editKey === taskId) setEditKey(undefined);
  };

  const editTask = (task: taskInterface): void => {
    setTasks(
      tasks.map((t) => {
        if (t.id === task.id) {
          return {
            ...task,
            modifiedDate: new Date().toUTCString(),
          };
        }
        return t;
      })
    );
    setEditKey(undefined);
  };

  useEffect(() => {
    if (editElement.current !== null) editElement.current.focus();
  }, [editKey]);

  return {
    tasks,
    addTask,
    removeTask,
    editKey,
    setEditKey,
    editElement,
    editTask,
  };
};

export default useTodo;
