import { useState } from "react";
import CreateItem from "./components/CreateItem";
import ItemList from "./components/ItemList";
import "./styles.css";

export default function App() {
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      content: "上記フォームでTODOを追加します",
      isDone: false
    },
    {
      id: 2,
      content: "チェックして終了させることができます",
      isDone: true
    }
  ]);
  return (
    <div className="App">
      <CreateItem todoList={todoList} setTodoList={setTodoList} />
      <ItemList todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
}
