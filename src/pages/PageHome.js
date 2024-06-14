import { useEffect, useState } from "react"
import HighlightGroup from "../components/Highlight-Group";
import { Box, Grid, Typography } from "@mui/material";
import GoogleAds from '../components/Google-Ads';
import Carousel from "../components/Carousel";
import fetchData from "../services/fetchData";
import { useOutletContext } from "react-router-dom";

export default function PageHome() {
  const dataConfig = useOutletContext()
  const [data, setData] = useState([])
  const [dataHighlight, setHighlight] = useState([])
  
  useEffect(() => {
    fetchData(`/data/news.json`)
      .then(res => {
        setData(res.slice(0, 35))
        setHighlight([res[Math.floor(Math.random() * res.length)], res[Math.floor(Math.random() * res.length)]])
      })
      .catch(error => console.log(error))
    }, [])

  return (
    <Box sx={{maxWidth: "1280px", margin: "40px auto 0"}}>
      <Grid container>
        <Grid item xs={12}>
          <HighlightGroup data={dataHighlight} />
        </Grid>
        <Grid item xs={12}>
          <Grid item container spacing={0}>
            <Grid item xs={9}>
              <Typography variant="h4" sx={{marginTop: "20px", fontWeight: "bold"}} color="#333333">&Uacute;ltimas Not&iacute;cias</Typography>
              <Carousel styles={{marginTop: "20px"}} data={data} itemsToScroll={3} />
            </Grid>
            <Grid item xs={3} marginLeft="auto">
              <GoogleAds data={dataConfig?.ads && dataConfig?.ads[0]} styles={{margin: "65px 0 0 20px"}} />
              <GoogleAds data={dataConfig?.ads && dataConfig?.ads[1]} styles={{margin: "20px 0 0 20px"}} />
            </Grid>
          </Grid>
        </Grid>                
      </Grid>
    </Box>
  )
}