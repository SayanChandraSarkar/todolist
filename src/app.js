import React from "react";
import Box from "@mui/material/Box";
import Layout from "./component/Layout";
import AddTodo from "./component/AddTodo";
import DisplayTodo from "./component/DisplayTodo";
import useTodo from "./hooks/useTodo";

function App() {
  const { todos, addTodo, changeStatus, filter, setFilter } = useTodo();

  return (
    <>
      <Layout filter={filter} setFilter={setFilter} />

      <Box sx={{ p: 3, maxWidth: 800, m: "auto" }}>
        <AddTodo addTodo={addTodo} />
        <DisplayTodo
          todos={todos}
          changeStatus={changeStatus}
          filter={filter}
        />
      </Box>
    </>
  );
}

export default App;
