import { Box, Typography } from "@mui/material";
import fetchData from "../services/fetchData";
import { useEffect, useState } from "react";

export default function PageSobre() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetchData(`/data/about.json`)
            .then(res => setData(res || []))
            .catch(error => console.log(error))
    }, [])

    return (
        <Box sx={{maxWidth: "1280px", margin: "40px auto 0"}}>
            <Typography variant="h1" color="#333333" sx={{fontSize: "40px", fontWeight: "bold"}}>{data?.title}</Typography>
            <Box sx={{maxWidth: 1280, margin: "20px auto 0"}}>
                <Typography variant="body1" color="textSecondary" component="p" dangerouslySetInnerHTML={{ __html: data?.description }} />
            </Box>
        </Box>
    )
}