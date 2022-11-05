import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import Checkbox from "@mui/material/Checkbox";

function DisplayTodo({ filter, todos, changeStatus }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (filter === "all") {
      setData(todos);
    } else {
      // completed = true if filter = completed
      const completed = filter === "completed";
      // filter out only requried todos
      const filtered = todos.filter((e) => e.completed === completed);
      setData(filtered);
    }
  }, [todos, filter]);

  return (
    <FormControl>
      <FormGroup>
        {data.map((todo, index) => (
          <FormControlLabel
            key={index}
            control={
              <Checkbox
                checked={todo.completed}
                onChange={() => changeStatus(index)}
                name="todo"
              />
            }
            label={
              todo.completed ? (
                <Box component="del" sx={{ color: "#999" }}>
                  {todo.text}
                </Box>
              ) : (
                <>{todo.text}</>
              )
            }
          />
        ))}
      </FormGroup>
    </FormControl>
  );
}

export default DisplayTodo;
