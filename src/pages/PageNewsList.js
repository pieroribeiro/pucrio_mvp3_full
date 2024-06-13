import { useEffect, useState } from "react"
import ArticleList from '../components/Article/ArticleList'
import { Box } from "@mui/material"
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
        <Box sx={{display: "flex", flexDirection: "row", maxWidth: "1280px", margin: "40px auto 0"}}>
            <Box sx={{maxWidth: "960px", margin: "0"}}>
                <ArticleList data={data} />           
            </Box>
            <Box sx={{display: "flex", flexDirection: "column", maxWidth: "300px", margin: "60px 0 0 20px"}}>
                {(dataConfig?.ads || []).map((itemAds, i) => (
                    <GoogleAds key={i} data={itemAds} styles={{display: "flex", flexDirection: "column", margin: "20px 0 0 0"}} />
                ))}    
            </Box>
        </Box>
    )
}