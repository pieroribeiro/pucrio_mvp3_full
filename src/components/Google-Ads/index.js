import React from "react";
import { Box } from '@mui/material';

export default class GoogleAds extends React.Component {
    render () {
        const {title, imageUrl} = this.props?.data || {title:"",imageUrl:""}
        const styles = this.props?.styles || {}

        return (title, imageUrl) ? (
            <Box sx={styles}>
                <img src={imageUrl} title={title.replace('"', '')} alt={title.replace('"', '')} />
            </Box>
        ) : (
            <></>
        )
    }
}
