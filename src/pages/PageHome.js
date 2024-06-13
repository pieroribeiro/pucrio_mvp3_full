import { useEffect, useState } from "react"
import LastNews from '../components/Last-News';
import HighlightGroup from "../components/Highlight-Group";
import { Box } from "@mui/material";
import fetchData from "../services/fetchData";

export default function PageHome() {
  const [data, setData] = useState([])
  const [dataHighlight, setHighlight] = useState([])
  
  useEffect(() => {
    fetchData(`/data/news.json`)
      .then(res => {
        setData(res)
        setHighlight([res[Math.floor(Math.random() * res.length)], res[Math.floor(Math.random() * res.length)]])
      })
      .catch(error => console.log(error))
    }, [])

  return (
    <Box sx={{maxWidth: "1280px", margin: "40px auto 0"}}>
      <HighlightGroup data={dataHighlight} />

      <Box sx={{marginTop: "20px"}}>
        <LastNews data={data} />
      </Box>
    </Box>
  )
}