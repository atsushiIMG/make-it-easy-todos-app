import { TextField } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import { useState } from "react";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";

const CreateItem = (props) => {
  const [newTodo, setNewTodo] = useState("");

  // TextfieldとButtonIconを合体させたコンポーネントの作成
  // https://codesandbox.io/s/material-demo-u40h7?fontsize=14&file=/demo.js:27-133
  const AddButton = () => {
    const addButtonClick = () => {
      props.setTodoList([
        ...props.todoList,
        {
          id: props.todoList.length + 1,
          content: newTodo,
          isDone: false
        }
      ]);
      setNewTodo("");
    };
    return (
      <IconButton onClick={() => addButtonClick()}>
        <AssignmentTurnedInIcon />
      </IconButton>
    );
  };

  return (
    <TextField
      label="TODOを追加"
      value={newTodo}
      onChange={(e) => setNewTodo(e.target.value)}
      InputProps={{ endAdornment: <AddButton /> }}
    />
  );
};

export default CreateItem;
