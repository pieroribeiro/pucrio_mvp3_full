import { useEffect, useState } from "react"
import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import Article from "../components/Article"
import { Box, Grid, Typography } from "@mui/material";
import GoogleAds from "../components/Google-Ads";
import Carousel from "../components/Carousel";

export default function PageNews() {
    const [dataConfig, dataNewsList] = useOutletContext()

    const [data, setData] = useState(null)
    const navigate = useNavigate()
    const { id } = useParams()

    useEffect(() => {
        const news = dataNewsList.filter(item => parseInt(item.id) === parseInt(id))
        
        if (news && news.length > 0) {
            setData(news[0])
        } else {
            navigate("/noticias")
        }
    }, [id, navigate, dataNewsList])

    return (
        <Box sx={{maxWidth: "1280px", margin: "40px auto 0"}}>
            <Grid container sx={{margin: "20px 0 0 0"}}>
                <Grid item xs={9}>
                    <Article data={data} />
                </Grid>
                <Grid item xs={3}>
                    <GoogleAds data={dataConfig?.ads && dataConfig?.ads[0]} styles={{margin: "5px 0 0 20px"}} />
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