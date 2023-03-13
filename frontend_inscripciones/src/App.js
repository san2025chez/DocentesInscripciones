import logo from "./logo.svg";
import "./App.css";
import { Inscripcion } from "./Components/Inscripcion/inscripcion.js";
import UserList from "./Components/users/userlist";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import { Messaje } from "./messaje/messaje";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { UserId } from "./Components/users/userId";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#4db6ac",
    },
    secondary: {
      main: "#64ffda",
    },
  },
});

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Header />

        <Routes>
          <Route path="/" element={<Inscripcion />} />
          <Route path="users" element={<UserList />} />
          <Route path="messaje" element={<Messaje />} />
          <Route path="userId/:id" element={<UserId />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
