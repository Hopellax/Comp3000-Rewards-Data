import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import { Link, useNavigate } from "react-router-dom";
import moment from "moment";
import { Button } from '@mui/material';

const NavBar = (props) => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [date, setDate] = React.useState(moment());

    const navigate = useNavigate();
    React.useEffect(() => {
        const interval = setInterval(() => setDate(moment()), 1000);
        return () => clearInterval(interval);
    }, [])

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    function logout(e) {
        e.preventDefault();
        props.setUser(undefined);
        navigate("/Landingpage")
    }

    const pages = ['Dashboard', 'Snapchat', 'Instagram', 'FAQs', 'Contact-Us']; // Define pages outside the conditional rendering block

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <div style={{ display: "flex", position: "relative" }}>
                    <h2 style={{ margin: "auto" }}>FREEDOM AND CONTROL OF OUR INFORMATION</h2>
                    <div style={{ position: "absolute", right: "1em", top: "1em" }}>
                        {props.user && (<p>Welcome {props.user.name}</p>)}
                        <p>{date.format("ddd MMM Do YYYY")}</p>
                    </div>
                </div>
                <Toolbar disableGutters>
                    {/* Remaining content */}
                    <Box
                        sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}
                        style={{ minHeight: "0", paddingTop: "0.5em" }}
                    >
                        {props.user && // Conditionally render the navigation links if user is logged in
                            pages.map((page) => (
                                <div className="a__navlink" key={page}>
                                    <Link to={page.toLowerCase()}>{page.replace(/-/g, ' ')}</Link>
                                </div>
                            ))}
                        {props.user && // Conditionally render the logout button if user is logged in
                            <div className="a__navlink" >
                                <a href="/home" style={{ paddingTop: "1em", cursor: "pointer" }} onClick={logout}>Log out</a>
                            </div>
                        }
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default NavBar;
