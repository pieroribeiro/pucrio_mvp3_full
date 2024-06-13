import { useEffect, useState } from "react"
import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import Article from "../components/Article"
import LastNews from '../components/Last-News'
import { Box } from "@mui/material";
import fetchData from "../services/fetchData";
import GoogleAds from "../components/Google-Ads";

export default function PageNews() {
    const dataConfig = useOutletContext()

    const [data, setData] = useState(null)
    const [dataList, setDataList] = useState(null)
    const navigate = useNavigate()
    const { id } = useParams()

    useEffect(() => {
        fetchData(`/data/news.json`)
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
        <Box sx={{display: "flex", flexDirection: "row", maxWidth: "1280px", margin: "40px auto 0"}}>
            <Box sx={{maxWidth: "960px", margin: "0"}}>
                <Article data={data} />
                <LastNews data={dataList} />
            </Box>
            <Box sx={{display: "flex", flexDirection: "column", maxWidth: "300px", margin: "60px 0 0 20px"}}>
                {(dataConfig?.ads||[]).map((itemAds, i) => (
                    <GoogleAds key={i} data={itemAds} styles={{display: "flex", flexDirection: "column", margin: "20px 0 0 0"}} />
                ))}    
            </Box>
        </Box>
    )
}