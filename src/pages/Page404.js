import { Box, Typography } from "@mui/material";

export default function Page404() {
    return (
        <Box sx={{maxWidth: "1280px", margin: "40px auto 0"}}>
            <Typography variant="h1" color="#333333" sx={{fontSize: "40px"}}>Página não encontrada</Typography>
            <Box sx={{minHeight: "900px"}}></Box>
        </Box>
    )
}