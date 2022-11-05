import { useState } from "react";
import { TextField, Paper, Button, Grid } from "@mui/material";

const AddTodo = ({ addTodo }) => {
  const [todo, setTodo] = useState("");

  const onChange = (e) => {
    setTodo(e.target.value);
  };

  const onAdd = () => {
    if (todo.length === 0) {
      return;
    }
    addTodo(todo);
    setTodo("");
  };

  return (
    <Grid container spacing={2} sx={{ mb: 4 }}>
      <Grid xs={8} md={10} item>
        <TextField
          placeholder="Add Todo here"
          value={todo}
          onChange={onChange}
          fullWidth
          size="small"
        />
      </Grid>
      <Grid xs={4} md={2} item>
        <Button
          fullWidth
          color="primary"
          variant="contained"
          // size="large"
          onClick={onAdd}
        >
          Add
        </Button>
      </Grid>
    </Grid>
  );
};
export default AddTodo;
