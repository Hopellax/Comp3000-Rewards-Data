import { Routes, Route, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./pages/Dashboard";
import Landing from "./pages/landing";
import FAQs from "./pages/FAQs";
import Contact from "./pages/Contact";
import Snapchat from "./pages/Snapchat";
import Instagram from "./pages/Instagram";
import NavBar from "./components/NavBar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#8ACDD7",
    },
    secondary: {
      main: "#333333",
    },
    background: {
      default: "#FFF6F6",
    },
  },
});

function App() {
  const [loggedInUser, setLogedInUser] = React.useState();

  const updateUser = (user) => setLogedInUser(user);

  const navigate = useNavigate();

  React.useEffect(() => {
    if (!loggedInUser) {
      navigate("/Landingpage");
    }
  }, [window.location.href]);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <NavBar user={loggedInUser} setUser={updateUser} />
        <main>
          <Routes>
            <Route
              path="/Landingpage"
              element={<Landing user={loggedInUser} updateUser={updateUser} />}
            />
            <Route
              path="/Dashboard"
              element={
                <Dashboard user={loggedInUser} users={loggedInUser || {}} />
              }
            />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/Snapchat" element={<Snapchat />} />
            <Route path="/Instagram" element={<Instagram />} />
          </Routes>
        </main>
      </ThemeProvider>
    </div>
  );
}

export default App;