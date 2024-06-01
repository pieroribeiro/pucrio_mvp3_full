import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import { Paper } from "@mui/material"
import Article from "../components/Article"
import LastNews from '../components/Last-News'

export default function PageNews() {
    const [data, setData] = useState(null)
    const [dataList, setDataList] = useState(null)
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        const key = '47a44c3467c84467a0ccd7ae0db9ad9b'
        const url = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${key}&pageSize=40&sortBy=publishedAt&language=pt`
        fetch(url)
            .then(res => res.json())
            .then(res => {
                const idNews = parseInt(id-1)
                if (res?.articles?.length > 0 && idNews >= 0 && idNews < res?.articles?.length) {
                    setData(res.articles[idNews])
                    
                    res.articles.splice(idNews, 1)
                    const rnd = Math.floor(Math.random() * (res.articles.length - 5))
                    setDataList(res.articles.map((item, index) => {
                        const newItem = item
                        newItem.id = index
                        return newItem
                    }).slice(rnd, (rnd + 3)))
                } else {
                    navigate("/noticias")
                }
            })
            .catch(error => console.log(error))
    }, [id, navigate])

    return (
        <>
            {data ? (
                <Paper sx={{display: 'flex', flexDirection: "column", justifyContent: 'center', textAlign: 'center', padding: 5}} elevation={2}>
                    <Article data={data} />
                    <LastNews data={dataList} />
                </Paper>
            ) : (
                <div>Artigo não encontrado</div>
            )}
        </>
    )
}