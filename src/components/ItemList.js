import ListItemIcon from "@material-ui/core/ListItemIcon";
import { makeStyles } from "@material-ui/core/styles";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360
  },
  finishedTodo: {
    color: "#808080"
  }
}));

const ItemList = (props) => {
  const classes = useStyles();

  // How to update state with usestate in an array of objects
  // https://stackoverflow.com/questions/62918710/how-to-update-state-with-usestate-in-an-array-of-objects
  const handleCheckbox = (id) => {
    // loop over the todos list and find the provided id.
    let updatedList = props.todoList.map((item) => {
      if (item.id == id) {
        return { ...item, isDone: !item.isDone }; //gets everything that was already in item, and updates "done"
      }
      return item; // else return unmodified item
    });
    props.setTodoList(updatedList);
  };
  console.log(props.todoList);
  return (
    <List className={classes.root}>
      {/* NOT finished TODO */}
      {props.todoList.map((item) => {
        if (!item.isDone) {
          return (
            <ListItem
              key={item.id}
              role={undefined}
              dense
              button
              onClick={() => handleCheckbox(item.id)}
            >
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={item.isDone}
                  tabIndex={-1}
                  // disableRipple
                  // inputProps={{ "aria-labelledby": item.id }}
                />
              </ListItemIcon>
              <ListItemText id={item.id} primary={item.content} />
            </ListItem>
          );
        }
      })}

      {/* finished TODO */}
      {props.todoList.map((item) => {
        if (item.isDone) {
          return (
            <ListItem
              key={item.id}
              role={undefined}
              dense
              button
              onClick={() => handleCheckbox(item.id)}
            >
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={item.isDone}
                  tabIndex={-1}
                  // disableRipple
                  // inputProps={{ "aria-labelledby": item.id }}
                />
              </ListItemIcon>
              <ListItemText
                id={item.id}
                primary={item.content}
                className={classes.finishedTodo}
              />
            </ListItem>
          );
        }
      })}
    </List>
  );
};

export default ItemList;
