export const loadTasks = () => {
  const saveTasks = localStorage.getItem('tasks')
 return saveTasks ? JSON.parse(saveTasks) : [];
  };
  
  export const saveTasks = (tasks) => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };