import ArticleList from '../components/Article-List'
import { Grid, Box, Typography } from "@mui/material"
import GoogleAds from "../components/Google-Ads"
import { useOutletContext } from "react-router-dom"

export default function PageNews() {
    const [dataConfig, dataNewsList] = useOutletContext()

    return (
        <Box sx={{maxWidth: "1280px", margin: "40px auto 0"}}>
            <Typography sx={{fontSize: "40px", fontWeight: "bold"}} color="#333333" variant="h1">Últimas Notícias</Typography>
            <Grid container>
                <Grid item xs={9}>
                    <ArticleList styles={{maxWidth: "960px", margin: "10px 0 0 0"}} data={dataNewsList} />
                </Grid>
                <Grid item xs={3}>
                    <GoogleAds data={dataConfig?.ads && dataConfig?.ads?.rectangle[0]} styles={{margin: "25px 0 0 20px"}} />
                    <GoogleAds data={dataConfig?.ads && dataConfig?.ads?.rectangle[1]} styles={{margin: "20px 0 0 20px"}} />
                </Grid>
                <Grid item xs={12}>
                    <GoogleAds data={dataConfig?.ads && dataConfig?.ads?.full[0]} styles={{margin: "20px 0 0 0"}} />
                </Grid>                
            </Grid>
        </Box>
    )
}