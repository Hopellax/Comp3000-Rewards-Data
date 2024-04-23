import React, { useState } from "react";
import { Button, Paper, TextField } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import Checkbox from "@mui/material/Checkbox";
import TCpopup from "./TC";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function Landing(props) {
  const [value, setValue] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [showTC, setShowTC] = useState(true); // Initially set to true to display the popup
  const navigate = useNavigate();

  const login = () => {
    const data = window.localStorage.getItem("cheese") || "[]";
    const users = JSON.parse(data);
    const found = users.find(
      (user) => user.email === email && user.password === password
    );
    if (found) {
      props.updateUser(found);
      navigate("/Dashboard");
    } else {
      alert("Invalid username and/or password");
    }
  };

  const signup = () => {
    if (!password) {
      alert("Please enter a password");
      return;
    }
    let data = window.localStorage.getItem("cheese") || "[]";
    data = JSON.parse(data);
    const found = data.find((user) => user.email === email);

    if (found) {
      alert("Email already in use, return to login?");
      return;
    }

    const newUser = {
      email,
      password,
      name,
      surname,
    };

    data.push(newUser);
    window.localStorage.setItem("cheese", JSON.stringify(data));
    props.updateUser(newUser);
    navigate("/Dashboard");
  };

  React.useEffect(() => {
    if (props.user) navigate("/dashboard");
  }, [props.user]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleOpenTC = () => {
    setShowTC(true); // Set showTC to true to open the Terms and Conditions popup
};
  return (
    <Paper style={{ padding: 0 }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Login" {...a11yProps(0)} />
          <Tab label="Sign up" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <div
          style={{ display: "flex", flexDirection: "column", width: "60ch" }}
        >
          <TextField
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ paddingBottom: "1em" }}
            id="outlined-basic"
            label="Email"
            variant="outlined"
          />
          <TextField
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ paddingBottom: "1em" }}
            id="outlined-basic"
            label="Password"
            variant="outlined"
            type="password"
          />
          <Button
            variant="contained"
            style={{ paddingTop: "1em" }}
            onClick={login}
          >
            Login
          </Button>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div style={{ display: "flex", flexDirection: "row", width: "60ch" }}>
          <div style={{ flex: 1, paddingRight: "1em", paddingBottom: "1em" }}>
            <TextField
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{ paddingBottom: "1em" }}
              id="outlined-basic"
              label="First Name"
              variant="outlined"
            />
            <TextField
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              style={{ paddingBottom: "1em" }}
              id="outlined-basic"
              label="Surname"
              variant="outlined"
            />
            <TextField
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ paddingBottom: "1em" }}
              id="outlined-basic"
              label="Email"
              variant="outlined"
            />
            <TextField
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ paddingBottom: "1em" }}
              id="outlined-basic"
              label="Password"
              variant="outlined"
              type="password"
            />
            {showTC && <TCpopup />}
            <Button
              variant="contained"
              style={{ paddingTop: "1em" }}
              onClick={signup}
            >
              Signup
            </Button>
          </div>
          <div style={{ flex: 1 }}>
            <h4>Which of these do you use?</h4>
            <label
              style={{
                display: "flex",
                alignItems: "center",
                paddingBottom: "1em",
              }}
            >
              <p style={{ marginRight: "0.5em" }}>Facebook</p>
              <Checkbox id="fb" />
            </label>
            <br />
            <label
              style={{
                display: "flex",
                alignItems: "center",
                paddingBottom: "1em",
              }}
            >
              <p style={{ marginRight: "0.5em" }}>Snapchat</p>
              <Checkbox id="sp" />
            </label>
            <br />
            <label
              style={{
                display: "flex",
                alignItems: "center",
                paddingBottom: "1em",
              }}
            >
              <p style={{ marginRight: "0.5em" }}>Instagram</p>
              <Checkbox id="ig" />
            </label>
          </div>
        </div>
      </TabPanel>
    </Paper>
  );
}

export default Landing;

