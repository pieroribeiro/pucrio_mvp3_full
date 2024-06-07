import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import Article from "../components/Article"
import LastNews from '../components/Last-News'

export default function PageNews() {
    const [data, setData] = useState(null)
    const [dataList, setDataList] = useState(null)
    const navigate = useNavigate()
    const { id } = useParams()

    useEffect(() => {
        fetch(`/news.json`)
            .then(res => res.json())
            .then(res => {
                const news = res.filter(item => parseInt(item.id) === parseInt(id))
                
                if (news && news.length > 0) {
                    setData(news[0])
                    setDataList(res)
                } else {
                    navigate("/noticias")
                }
            })
            .catch(error => console.log(error))
    }, [id, navigate])

    return (
        <>
            <section style={{maxWidth: 1280, margin: "20px auto 0"}}>
                <Article data={data} />
                <LastNews data={dataList} />
            </section>
        </>
    )
}