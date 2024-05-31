import { useEffect, useState } from "react"
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { Config } from '../config'
import { Paper } from "@mui/material"
import Article from "../components/Article"

export default function PageNews() {
    const [data, setData] = useState(null)
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        fetch(`http://127.0.0.1:${Config["PORT"]}/news.json`)
            .then(res => res.json())
            .then(res => {
                const NewsFiltered = res.filter(e => e.id === parseInt(id))
                if (NewsFiltered.length > 0) {
                    setData(NewsFiltered[0])
                } else {
                    navigate("/noticias")
                }
            })
            .catch(error => console.log(error))
    }, [id])

    return (
        <>
            {data ? (
                <Paper sx={{display: 'flex', justifyContent: 'center', textAlign: 'center', padding: 5}} elevation={2}>
                    <Article data={data} />
                </Paper>
            ) : (
                <div>Artigo não encontrado</div>
            )}
        </>
    )
}