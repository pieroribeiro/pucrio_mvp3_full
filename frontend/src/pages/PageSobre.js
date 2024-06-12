import { Box, Typography } from "@mui/material";

export default function PageSobre() {

    return (
        <Box sx={{maxWidth: "1280px", margin: "40px auto 0"}}>
            <Typography variant="h1" color="#333333" sx={{fontSize: "40px", fontWeight: "bold"}}>Sobre</Typography>
            <Box sx={{maxWidth: 1280, margin: "20px auto 0"}}>
                <Typography variant="body1" color="textSecondary" component="p">Este é o MVP3 do Módulo Frontend Avançado, da PUC Rio.</Typography>
                <img style={{maxWidth: 1280, marginTop: "20px"}} src="/assets/images/img-001.webp" alt="MVP3 Frontend Avançado - PUC Rio" title="MVP3 Frontend Avançado - PUC Rio" />
            </Box>
        </Box>
    )
}