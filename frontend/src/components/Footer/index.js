import { Typography } from "@mui/material";
import React from "react";
import './style.css'

export default class Footer extends React.Component {
    render () {
        return (
            <footer className="footer">
                <Typography variant="body2">MVP3 - PUC RIO</Typography>
                <Typography variant="caption" color="inherit">© {new Date().getFullYear()} Todos os direitos reservados.</Typography>
            </footer>
        )
    }
}