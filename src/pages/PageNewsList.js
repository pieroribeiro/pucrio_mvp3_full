import { useEffect, useState } from "react"
import ArticleList from '../components/Article-List'
import { Grid, Box, Typography } from "@mui/material"
import fetchData from "../services/fetchData"
import GoogleAds from "../components/Google-Ads"
import { useOutletContext } from "react-router-dom"

export default function PageNews() {
    const dataConfig = useOutletContext()

    const [data, setData] = useState([])
    useEffect(() => {
        fetchData(`/data/news.json`)
            .then(res => setData(res || []))
            .catch(error => console.log(error))
    }, [])

    return (
        <Box sx={{maxWidth: "1280px", margin: "40px auto 0"}}>
            <Typography sx={{fontSize: "40px", fontWeight: "bold"}} color="#333333" variant="h1">Últimas Notícias</Typography>
            <Grid container>
                <Grid item xs={9}>
                    <ArticleList styles={{maxWidth: "960px", margin: "10px 0 0 0"}} data={data} />
                </Grid>
                <Grid item xs={3}>
                    <GoogleAds data={dataConfig?.ads && dataConfig?.ads[0]} styles={{margin: "25px 0 0 20px"}} />
                    <GoogleAds data={dataConfig?.ads && dataConfig?.ads[1]} styles={{margin: "20px 0 0 20px"}} />
                </Grid>                
            </Grid>
        </Box>
    )
}