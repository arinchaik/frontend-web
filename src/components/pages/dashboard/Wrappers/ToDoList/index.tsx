import { FC, useContext } from 'react';
// import { width } from '../../../../../lib/config';
import { SettingsContext } from '../../../../../lib/context/settings';
import ToggleCollapsed from '../ToggleCollapsed';
import Tasks from './Tasks';

const ToDoList: FC = () => {
  const { toDoCollapsed, toggleToDoCollapsed } = useContext(SettingsContext);
  // const { open, closed } = width.Todo;
  return (
    <>
      <div
        className={`fixed top-0 left-0 h-screen w-screen bg-primary/10 backdrop-blur transition-all duration-200 ${
          toDoCollapsed
            ? 'invisible opacity-0'
            : 'visible opacity-100 md:invisible  md:opacity-0'
        }`}
      />
      <div
        className={`fixed bottom-0 left-0 w-full shrink-0 rounded-t-[2rem] border border-primary/30 bg-base-200 py-4 transition-all duration-300 lg:relative lg:h-full lg:rounded-l-[2rem] lg:rounded-tr-none ${
          toDoCollapsed ? 'lg:max-w-[60px]' : 'lg:max-w-[500px]'
        }`}
      >
        <p
          className={`whitespace-nowrap px-5 text-2xl font-bold transition-all duration-300 lg:h-auto ${
            toDoCollapsed ? 'lg:rotate-90' : ''
          }`}
        >
          To-do List
        </p>
        <Tasks />
        <ToggleCollapsed
          className={`right-0 top-0 transition-all duration-300 md:top-auto md:right-auto md:left-0 ${
            toDoCollapsed ? 'rotate-90 md:rotate-0' : '-rotate-90 md:rotate-180'
          }`}
          toggle={toggleToDoCollapsed}
        />
      </div>
    </>
  );
};

export default ToDoList;
