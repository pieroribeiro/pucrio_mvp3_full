import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";
import Menu from "./Menu";
import { Link } from "react-router-dom";

export default class Header extends React.Component {
    render() {
        return (
            <AppBar sx={{height: 80}} position="static">
                <Toolbar>
                    <Link to="/" style={{flexGrow: 1, textDecoration: "none", color: "#FFFFFF"}}>
                        <Typography variant="h6" sx={{fontSize: 24, marginTop: 2}}>{this.props.title || 'N4W Web Solutions'}</Typography>
                    </Link>
                    <Menu location={this.props.location} items={this.props.menuItems || []} />
                </Toolbar>
            </AppBar>
        );
    }
}
