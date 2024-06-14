import { Box, Grid, Typography } from "@mui/material";
import GoogleAds from "../components/Google-Ads";
import { useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";
import fetchData from "../services/fetchData";
import Carousel from "../components/Carousel";

export default function Page404() {
    const dataConfig = useOutletContext()
    const [data, setData] = useState(null)

    useEffect(() => {
        fetchData(`/data/news.json`)
            .then(res => {
                setData(res.slice(0, 35))
            })
            .catch(error => console.log(error))
    }, [])

    return (
        <Box sx={{maxWidth: "1280px", margin: "40px auto 0"}}>
            <Typography sx={{fontSize: "40px", fontWeight: "bold"}} color="#333333" variant="h1">Página não encontrada</Typography>
            <Grid container>
                <Grid item xs={9}>
                    <Typography variant="h1" color="#333333" sx={{fontSize: "40px"}}>A página que está tentando acessar não está mais disponível</Typography>
                    <Typography variant="h4" sx={{marginTop: "20px", fontWeight: "bold"}} color="#333333">&Uacute;ltimas Not&iacute;cias</Typography>
                    <Carousel styles={{marginTop: "20px"}} data={data} itemsToScroll={3} />
                </Grid>
                <Grid item xs={3}>
                    <GoogleAds data={dataConfig?.ads && dataConfig?.ads[0]} styles={{margin: "25px 0 0 20px"}} />
                    <GoogleAds data={dataConfig?.ads && dataConfig?.ads[1]} styles={{margin: "20px 0 0 20px"}} />
                </Grid>                
            </Grid>
        </Box>
    )
}