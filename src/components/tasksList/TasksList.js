import TasksListItem from "../tasksListItem/TasksListItem";

import "./tasksList.scss";

const TasksList = ({ data, onDelete, onToggleProp }) => {
  if (!data.length) {
    return (
      <div className="tasks-add-form__text">Задачи не найдены! &#128578;</div>
    );
  }

  const elements = data.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <TasksListItem
        key={id}
        {...itemProps}
        onDelete={() => onDelete(id)}
        onToggleProp={(e) =>
          onToggleProp(e, id, e.currentTarget.getAttribute("data-toggle"))
        }
      />
    );
  });

  return <ul className="tasks-list">{elements}</ul>;
};

export default TasksList;
