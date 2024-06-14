import React from "react";
import Highlight from "../Hightlight";
import { Box, Grid } from "@mui/material";

export default class HighlightGroup extends React.Component {
    render () {
        const data = this.props?.data || []

        if(data && data.length === 2) {
            return (
                <Box sx={{marginTop: "20px"}}>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Highlight data={data[0]} />
                        </Grid>
                        <Grid item xs={6}>
                            <Highlight data={data[1]} />
                        </Grid>
                    </Grid>
                </Box>
            )
        } else {
            return (
                <></>
            )
        }
    }
}