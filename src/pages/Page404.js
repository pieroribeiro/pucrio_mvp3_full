import { Box, Grid, Typography } from "@mui/material";
import GoogleAds from "../components/Google-Ads";
import { useOutletContext } from "react-router-dom";
import Carousel from "../components/Carousel";

export default function Page404() {
    const [dataConfig, dataNewsList] = useOutletContext()

    return (
        <Box sx={{maxWidth: "1280px", margin: "40px auto 0"}}>
            <Typography sx={{fontSize: "40px", fontWeight: "bold"}} color="#333333" variant="h1">Página não encontrada</Typography>
            <Grid container spacing={2}>
                <Grid item xs={9}>
                    <Typography variant="h2" color="#333333" sx={{fontSize: "24px", minHeight: "300px", margin: "20px 0 0 0"}}>A página requisitada não foi encontrada em nosso portal. Verifique a URL digitada ou clique na logomarca para ir para a homepage.</Typography>
                </Grid>
                <Grid item xs={3}>
                    <GoogleAds data={dataConfig?.ads && dataConfig?.ads[0]} styles={{margin: "25px 0 0 20px"}} />
                    <GoogleAds data={dataConfig?.ads && dataConfig?.ads[1]} styles={{margin: "20px 0 0 20px"}} />
                </Grid> 
                <Grid item xs={12}>
                    <Typography variant="h4" sx={{marginTop: "20px", fontWeight: "bold"}} color="#333333">&Uacute;ltimas Not&iacute;cias</Typography>
                    <Carousel styles={{marginTop: "20px"}} data={(dataNewsList || []).slice(0, 35)} itemsToScroll={4} />
                </Grid>                 
            </Grid>
        </Box>
    )
}