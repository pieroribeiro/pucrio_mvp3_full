import React from "react";
import Highlight from "../Hightlight";
import { Box, Grid } from "@mui/material";

export default class HighlightGroup extends React.Component {
    render () {
        const data1 = {id: 1, url: "https://n4w.io", title: "Teste title", description: "teste description", image: {title: "Imagem 1", url: "https://static.sbt.com.br/noticias/images/274029.jpg"}}
        const data2 = {id: 2, url: "https://n4w.io", title: "Teste title", description: "teste description", image: {title: "Imagem 1", url: "https://static.sbt.com.br/noticias/images/274032.jpg"}}

        return (
            <Box sx={{margin: "20px auto 0", maxWidth: "1280px", height: "auto"}}>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Highlight data={data1} />
                    </Grid>
                    <Grid item xs={6}>
                        <Highlight data={data2} />
                    </Grid>
                </Grid>
            </Box>
        )
    }
}