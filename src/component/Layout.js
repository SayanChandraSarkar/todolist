import { AppBar, Toolbar, Typography, Paper } from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

const Layout = ({ filter, setFilter }) => {
  const handleChange = (_, f) => {
    setFilter(f);
  };

  const buttonSx = {
    borderColor: "#fff",
    color: "#fff",
    "&.Mui-selected": {
      bgcolor: "#fff",
      color: (theme) => theme.palette.primary.main,
    },
    "&:hover": {
      bgcolor: "rgba(0,0,0,0.2#)",
      color: "#fff",
    },
  };

  return (
    <AppBar color="primary" position="static">
      <Toolbar
        sx={{
          justifyContent: "space-between",
        }}
      >
        <Typography color="inherit">TODO APP</Typography>

        <ToggleButtonGroup
          size="small"
          value={filter}
          exclusive
          onChange={handleChange}
        >
          <ToggleButton value="all" sx={buttonSx}>
            All
          </ToggleButton>
          <ToggleButton value="active" sx={buttonSx}>
            Active
          </ToggleButton>
          <ToggleButton value="completed" sx={buttonSx}>
            Completed
          </ToggleButton>
        </ToggleButtonGroup>
      </Toolbar>
    </AppBar>
  );
};
export default Layout;
