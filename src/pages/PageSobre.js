import { Box, Grid, Typography } from "@mui/material";
import GoogleAds from "../components/Google-Ads";
import { useOutletContext } from "react-router-dom";
import Carousel from "../components/Carousel";

export default function PageSobre() {
    const [dataConfig, dataNewsList, dataAbout] = useOutletContext()

    return (
        <Box sx={{maxWidth: "1280px", margin: "40px auto 0"}}>
            <Typography sx={{fontSize: "40px", fontWeight: "bold"}} color="#333333" variant="h1">{dataAbout?.title}</Typography>
            <Grid container>
                <Grid item xs={9}>
                    <Typography variant="body1" color="textSecondary" component="p" dangerouslySetInnerHTML={{ __html: dataAbout?.description }} />
                </Grid>
                <Grid item xs={3}>
                    <GoogleAds data={dataConfig?.ads && dataConfig?.ads?.rectangle[0]} styles={{margin: "25px 0 0 20px"}} />
                    <GoogleAds data={dataConfig?.ads && dataConfig?.ads?.rectangle[1]} styles={{margin: "20px 0 0 20px"}} />
                </Grid> 
                <Grid item xs={12}>
                    <GoogleAds data={dataConfig?.ads && dataConfig?.ads?.full[0]} styles={{margin: "20px 0 0 0"}} />
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h4" sx={{marginTop: "20px", fontWeight: "bold"}} color="#333333">&Uacute;ltimas Not&iacute;cias</Typography>
                    <Carousel styles={{marginTop: "20px"}} data={dataNewsList} itemsToScroll={4} />
                </Grid>               
            </Grid>
        </Box>
    )
}