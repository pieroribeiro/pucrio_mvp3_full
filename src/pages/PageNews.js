import { useEffect, useState } from "react"
import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import Article from "../components/Article"
import { Box, Grid, Typography } from "@mui/material";
import fetchData from "../services/fetchData";
import GoogleAds from "../components/Google-Ads";
import Carousel from "../components/Carousel";

export default function PageNews() {
    const dataConfig = useOutletContext()

    const [data, setData] = useState(null)
    const [dataList, setDataList] = useState(null)
    const navigate = useNavigate()
    const { id } = useParams()

    useEffect(() => {
        fetchData(`/data/news.json`)
            .then(res => {
                const news = res.filter(item => parseInt(item.id) === parseInt(id))
                
                if (news && news.length > 0) {
                    setData(news[0])
                    setDataList(res.slice(0, 35))
                } else {
                    navigate("/noticias")
                }
            })
            .catch(error => console.log(error))
    }, [id, navigate])

    return (
        <Box sx={{maxWidth: "1280px", margin: "40px auto 0"}}>
            <Typography sx={{fontSize: "40px", fontWeight: "bold"}} color="#333333" variant="h1">Notícia</Typography>
            <Grid container sx={{margin: "20px 0 0 0"}}>
                <Grid item xs={9}>
                    <Article data={data} />
                    <Typography variant="h4" sx={{marginTop: "20px", fontWeight: "bold"}} color="#333333">&Uacute;ltimas Not&iacute;cias</Typography>
                    <Carousel styles={{marginTop: "20px"}} data={dataList} itemsToScroll={3} />
                </Grid>
                <Grid item xs={3}>
                    <GoogleAds data={dataConfig?.ads && dataConfig?.ads[0]} styles={{margin: "5px 0 0 20px"}} />
                    <GoogleAds data={dataConfig?.ads && dataConfig?.ads[1]} styles={{margin: "20px 0 0 20px"}} />
                </Grid>                
            </Grid>
        </Box>
    )
}