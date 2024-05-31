import { useEffect, useState } from "react"
import { Config } from '../config'
import { Paper } from "@mui/material"
import ArticleList from '../components/Article/ArticleList'

export default function PageNews() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch(`http://127.0.0.1:${Config["PORT"]}/news-list.json`)
            .then(res => res.json())
            .then(res => setData(res || []))
            .catch(error => console.log(error))
    }, [])

    return (
        <Paper sx={{display: 'flex', justifyContent: 'center', textAlign: 'center', padding: 5}} elevation={2}>
            <ArticleList data={data} />           
        </Paper>
    )
}