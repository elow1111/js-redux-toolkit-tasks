const logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.info("dispatching", action);
  const result = next(action);
  console.log("next state", store.getState());
  console.groupEnd();
  return result;
};

const addDate = (store) => (next) => (action) => {

  if (action.type === "TASK_ADD") {
    const date = new Date();
    
    const updatedAction = {
      ...action,
      payload: {
        ...action.payload,
        task: {
          ...action.payload.task,
          text: `Задача на ${date.toLocaleDateString('ru-RU')}: ${action.payload.task.text}`,
        },
      },
    };

    return next(updatedAction);
  }

  return next(action);
};


export default { logger, addDate };
