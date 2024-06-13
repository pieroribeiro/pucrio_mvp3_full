import React from "react";
import { Typography, Box } from '@mui/material';

export default class GoogleAds extends React.Component {
    render () {
        const {title, imageUrl} = this.props?.data || {title:"",imageUrl:""}
        const styles = this.props?.styles || {}

        return (title, imageUrl) ? (
            <Box sx={styles}>
                <Typography variant="caption" color="textSecondary" sx={{width: "300px", padding: "0", margin: "0"}}>{title}</Typography>
                <img src={imageUrl} title={title.replace('"', '')} alt={title.replace('"', '')} style={{margin: "10px 0 0 0", width: "300px", height: "250px"}} />
            </Box>
        ) : (
            <></>
        )
    }
}
