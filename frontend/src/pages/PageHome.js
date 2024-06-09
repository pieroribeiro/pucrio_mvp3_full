import { useEffect, useState } from "react"
import LastNews from '../components/Last-News';
import { Box } from "@mui/system";
import HighlightGroup from "../components/Highlight-Group";

export default function PageHome() {
  const [data, setData] = useState(null)
  
  useEffect(() => {
    fetch(`/news.json`)
      .then(res => res.json())
      .then(res => setData(res))
      .catch(error => console.log(error))
    }, [])

  return (
    <>
      <Box>
        <HighlightGroup />
      </Box>

      <Box sx={{maxWidth: 1280, margin: "20px auto 0"}}>
        <LastNews data={data} />
      </Box>
    </>
  )
}