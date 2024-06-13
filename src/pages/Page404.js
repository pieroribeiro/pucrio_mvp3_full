import { Box, Typography } from "@mui/material";
import GoogleAds from "../components/Google-Ads";
import { useOutletContext } from "react-router-dom";

export default function Page404() {
    const dataConfig = useOutletContext()

    return (
        <Box sx={{display: "flex", flexDirection: "row", maxWidth: "1280px", margin: "40px auto 0"}}>
            <Box sx={{maxWidth: "960px", margin: "0"}}>
                <Typography variant="h1" color="#333333" sx={{fontSize: "40px"}}>Página não encontrada</Typography>
                <Box sx={{minHeight: "900px"}}></Box>
            </Box>
            <Box sx={{display: "flex", flexDirection: "column", maxWidth: "300px", margin: "60px 0 0 20px"}}>
                {(dataConfig?.ads || []).map((itemAds, i) => (
                    <GoogleAds key={i} data={itemAds} styles={{display: "flex", flexDirection: "column", margin: "20px 0 0 0"}} />
                ))}    
            </Box>
        </Box>
    )
}