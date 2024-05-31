import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";
import Menu from "./Menu";

export default class Header extends React.Component {
    render() {
        return (
            <AppBar position="static">
                <Toolbar>
                    <Typography style={{ flexGrow: 1 }} variant="h6">
                        {this.props.title || 'Sistema de Gerenciamento de APIs'}
                    </Typography>
                    <Menu items={this.props.menuItems || []} />
                </Toolbar>
            </AppBar>
        );
    }
}
