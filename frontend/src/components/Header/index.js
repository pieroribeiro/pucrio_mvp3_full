import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default class Header extends React.Component {
    render () {
        return (
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6">Sistema de Gerenciamento de APIs</Typography>
                    <Button component={ Link } to="/" color="inherit">Home</Button>
                    <Button component={ Link } to="/graphics" color="inherit">Graphics</Button>
                    <Button component={ Link } to="/apis" color="inherit">Lista de APIs</Button>
                </Toolbar>
            </AppBar>
        )
    }
}