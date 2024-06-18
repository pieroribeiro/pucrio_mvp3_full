import { useEffect, useState } from "react"
import HighlightGroup from "../components/Highlight-Group";
import { Box, Grid, Typography } from "@mui/material";
import GoogleAds from '../components/Google-Ads';
import Carousel from "../components/Carousel";
import { useOutletContext } from "react-router-dom";

export default function PageHome() {
  const [dataConfig, dataNewsList] = useOutletContext()
  const [dataHighlight, setHighlight] = useState([])
  
  useEffect(() => {
    setHighlight([dataNewsList[Math.floor(Math.random() * dataNewsList.length)], dataNewsList[Math.floor(Math.random() * dataNewsList.length)]])
  }, [dataNewsList])

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
              <Carousel styles={{marginTop: "20px"}} data={dataNewsList} itemsToScroll={3} />
            </Grid>
            <Grid item xs={3} marginLeft="auto">
              <GoogleAds data={dataConfig?.ads && dataConfig?.ads?.rectangle[0]} styles={{margin: "65px 0 0 20px"}} />
              <GoogleAds data={dataConfig?.ads && dataConfig?.ads?.rectangle[1]} styles={{margin: "20px 0 0 20px"}} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <GoogleAds data={dataConfig?.ads && dataConfig?.ads?.full[0]} styles={{margin: "20px 0 0 0"}} />
        </Grid>               
      </Grid>
    </Box>
  )
}