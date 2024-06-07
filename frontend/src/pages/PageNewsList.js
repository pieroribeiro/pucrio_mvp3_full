import { useEffect, useState } from "react"
import ArticleList from '../components/Article/ArticleList'

export default function PageNews() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch(`/news.json`)
            .then(res => res.json())
            .then(res => setData(res || []))
            .catch(error => console.log(error))
    }, [])

    return (
        <section style={{maxWidth: 1280, margin: "0 auto"}}>
            <ArticleList data={data} />           
        </section>
    )
}