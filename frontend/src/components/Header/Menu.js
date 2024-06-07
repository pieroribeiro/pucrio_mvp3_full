import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default class Menu extends React.Component {
    render () {
        return (
            <div className="MenuContainer" style={{marginTop: 20}}>
                {this.props.items && this.props.items.map((el, index) => (
                    el.title && el.url ? (
                        <Button key={index} component={Link} to={el.url} color="inherit">{el.title}</Button>
                    ) : null
                ))}
            </div>
        )
    }
}
