const initialState = {
  tasks: [],
};

function handleAddTask(state, action) {
  return { tasks: [...state.tasks, action.task] };
}

function handleCheckTask(state, action) {
  const tasks = state.tasks.map((task) => {
    if (task.id === action.id) {
      return { ...task, isDone: !task.isDone };
    }

    return task;
  });

  return { tasks: tasks };
}

function handleDeleteTask(state, action) {
  return {
    tasks: state.tasks.filter((task) => task.id !== action.id),
  };
}

function handleSetTasks(state, action) {
  return { tasks: action.tasks };
}

export function reducer(state = initialState, action) {
  if (action.type === "ADD_TASK") {
    return handleAddTask(state, action);
  } else if (action.type === "CHECK_TASK") {
    return handleCheckTask(state, action);
  } else if (action.type === "DELETE_TASK") {
    return handleDeleteTask(state, action);
  } else if (action.type === "SET_TASKS") {
    return handleSetTasks(state, action);
  }

  return state;
}
