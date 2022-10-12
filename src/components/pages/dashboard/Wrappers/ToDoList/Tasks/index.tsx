import { FC, useContext } from 'react';
import { UserContext } from '../../../../../../data/userData';
import { SettingsContext } from '../../../../../../lib/context/settings';
import Task from '../Task';

const Tasks: FC = () => {
  const { toDoCollapsed } = useContext(SettingsContext);
  const { tasks } = useContext(UserContext);
  return (
    <ul
      className={`mt-4 space-y-4 overflow-x-hidden overflow-y-scroll px-5  ${
        toDoCollapsed ? 'mt-0 h-0' : 'h-[75vh]'
      }`}
    >
      {tasks.map((task, i) => (
        <Task delay={100 + i * 50} key={task.id} task={task} />
      ))}

      <li
        className="h-16 w-full text-lg capitalize transition-all duration-300"
        style={{
          ...(toDoCollapsed
            ? { scale: '0' }
            : {
                scale: '1',
                transitionDelay: `${100 + tasks.length * 50}ms`,
              }),
        }}
      >
        <button className="btn btn-primary h-full w-full">Add New Task</button>
      </li>
    </ul>
  );
};

export default Tasks;
