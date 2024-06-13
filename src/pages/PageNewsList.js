import { useEffect, useState } from "react"
import ArticleList from '../components/Article/ArticleList'
import { Box } from "@mui/material"
import fetchData from "../services/fetchData"
import GoogleAds from "../components/Google-Ads"

export default function PageNews() {
    const dataAds = [{
        title: "Anúncio 1 - Página Lista",
        imageUrl: "https://placehold.jp/14/3d4070/ffffff/300x250.png?text=Google%20ADs%201%20na%20p%C3%A1gina%20de%20listagem%20de%20not%C3%ADcias"
    },{
        title: "Anúncio 2 - Página Lista",
        imageUrl: "https://placehold.jp/14/3d4070/ffffff/300x250.png?text=Google%20ADs%202%20na%20p%C3%A1gina%20de%20listagem%20de%20not%C3%ADcias"
    },{
        title: "Anúncio 3 - Página Lista",
        imageUrl: "https://placehold.jp/14/3d4070/ffffff/300x250.png?text=Google%20ADs%203%20na%20p%C3%A1gina%20de%20listagem%20de%20not%C3%ADcias"
    }]

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
                {dataAds.map((itemAds, i) => (
                    <GoogleAds key={i} data={itemAds} styles={{display: "flex", flexDirection: "column", margin: "20px 0 0 0"}} />
                ))}    
            </Box>
        </Box>
    )
}