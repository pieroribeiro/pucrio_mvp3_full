import { useEffect, useState } from "react"
import { Paper } from "@mui/material"
import ArticleList from '../components/Article/ArticleList'

export default function PageNews() {
    const [data, setData] = useState([])
    useEffect(() => {
        const key = '47a44c3467c84467a0ccd7ae0db9ad9b'
        const url = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${key}&pageSize=40&sortBy=publishedAt&language=pt`
        fetch(url)
            .then(res => res.json())
            .then(res => setData(res?.articles || []))
            .catch(error => console.log(error))
    }, [])

    return (
        <Paper sx={{display: 'flex', justifyContent: 'center', textAlign: 'center', padding: 5}} elevation={2}>
            <ArticleList data={data} />           
        </Paper>
    )
}