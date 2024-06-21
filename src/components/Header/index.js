import { AppBar, Grid, Toolbar, Typography } from "@mui/material";
import React from "react";
import Menu from "./Menu";
import { Link } from "react-router-dom";
import { styled } from "@mui/system";

const Image = styled("img")`
    & {
        max-height: 40px;
    }
`

export default class Header extends React.Component {
    render() {
        return (
            <AppBar sx={{height: 64}} position="static">
                <Toolbar sx={{maxWidth: 1280, width: "100%", margin: "0 auto"}}>
                    <div style={{flexGrow: 1}}>
                        <Grid container spacing={2} direction="row" alignItems="center">
                            <Grid item>
                                <Link to="/" style={{textDecoration: "none", color: "#FFFFFF"}}>
                                    <Image src="/assets/images/logo.png" alt="N4W - Seu Portal de Notícias" />
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link to="/" style={{textDecoration: "none", color: "#FFFFFF"}}>
                                    <Typography variant="h6" sx={{fontSize: 24, marginLeft: "10px"}}>{this.props.title || 'N4W Web Solutions'}</Typography>
                                </Link>
                            </Grid>
                        </Grid>
                    </div>
                    <Menu location={this.props.location} items={this.props.menuItems || []} />
                </Toolbar>
            </AppBar>
        );
    }
}
