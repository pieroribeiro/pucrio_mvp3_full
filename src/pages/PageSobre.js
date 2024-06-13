import { Box, Typography } from "@mui/material";
import fetchData from "../services/fetchData";
import { useEffect, useState } from "react";
import GoogleAds from "../components/Google-Ads";
import { useOutletContext } from "react-router-dom";

export default function PageSobre() {
    const dataConfig = useOutletContext()
    
    const [data, setData] = useState([])
    useEffect(() => {
        fetchData(`/data/about.json`)
            .then(res => setData(res || []))
            .catch(error => console.log(error))
    }, [])

    return (
        <Box sx={{display: "flex", flexDirection: "row", maxWidth: "1280px", margin: "40px auto 0"}}>
            <Box sx={{maxWidth: "960px", margin: "0"}}>
                <Typography variant="h1" color="#333333" sx={{fontSize: "40px", fontWeight: "bold"}}>{data?.title}</Typography>
                <Box sx={{maxWidth: 1280, margin: "20px auto 0"}}>
                    <Typography variant="body1" color="textSecondary" component="p" dangerouslySetInnerHTML={{ __html: data?.description }} />
                </Box>
            </Box>
            <Box sx={{display: "flex", flexDirection: "column", maxWidth: "300px", margin: "60px 0 0 20px"}}>
                {(dataConfig?.ads || []).map((itemAds, i) => (
                    <GoogleAds key={i} data={itemAds} styles={{display: "flex", flexDirection: "column", margin: "20px 0 0 0"}} />
                ))}    
            </Box>
        </Box>
    )
}