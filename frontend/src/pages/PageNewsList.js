import { useEffect, useState } from "react"
import ArticleList from '../components/Article/ArticleList'
import { Box } from "@mui/material"

export default function PageNews() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch(`/news.json`)
            .then(res => res.json())
            .then(res => setData(res || []))
            .catch(error => console.log(error))
    }, [])

    return (
        <Box sx={{maxWidth: "1280px", margin: "40px auto 0"}}>
            <ArticleList data={data} />           
        </Box>
    )
}