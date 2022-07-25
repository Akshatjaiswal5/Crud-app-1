import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#3f51b5",
    },
    secondary: {
      main: "#f50057",
    },
  },
  shape: {
    borderRadius: 10,
  },
});

export default theme;
