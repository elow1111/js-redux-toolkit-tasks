import React from 'react';
import Spinner from './Spinner.jsx';
import TodoForm from './TodoForm.jsx';
import { useGetTasksQuery, useAddTaskMutation, useRemoveTaskMutation } from '../services/tasksApi.js';

const TodoBox = () => {
  // BEGIN (write your solution here)
  const { data: tasks, error, isLoading } = useGetTasksQuery();
  const [deleteTask, { error: deleteTaskError, isLoading: isDeletingTask }] = useRemoveTaskMutation();
  const [addTask, { error: addTaskError, isLoading: isAddingTask }] = useAddTaskMutation();
  // END

  const handleDeleteTask = (event, id) => {
    event.preventDefault();
    deleteTask(id);
  };

  const handleSubmitForm = (event, newTaskText) => {
    event.preventDefault();
    addTask({ text: newTaskText });  // Добавляем задачу как объект с полем text
  };

  const renderTodo = () => (
    <TodoForm submitHandler={handleSubmitForm} />
  );

  // Обрабатываем загрузку данных и ошибки
  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <div>Error loading tasks.</div>;
  }

  return (
    <div>
      <div className="mb-3">
        {renderTodo()}
      </div>
      <div>
        {tasks && tasks.map((task) => (
          <div key={task.id} className="row">
            <div className="col-1">
              {task.id}
            </div>
            <div className="col">
              <a href="" className="todo-task" onClick={(event) => handleDeleteTask(event, task.id)}>{task.text}</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoBox;
