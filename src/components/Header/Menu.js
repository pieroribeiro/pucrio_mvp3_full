import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/system";

const MenuItem = styled(Button)`
    & {
        margin-left: 10px;
    }

    &:hover {
        background-color: rgba(0, 0, 0, 0.08);
        border-radius: 4px;
    }

    &.active {
        background-color: rgba(0, 0, 0, 0.08);
        border-radius: 4px;
    }
`;

export default class Menu extends React.Component {
    render () {
        return (
            <div className="MenuContainer" style={{flexGrow: 1, textAlign: "right"}}>
                {
                    this.props.items && this.props.items.map((el, index) => (
                        <MenuItem key={index} className={(el.url === this.props.location?.pathname) ? 'active' : ''} component={Link} to={el?.url} color="inherit">{el?.title}</MenuItem>
                    ))
                }
            </div>
        )
    }
}
