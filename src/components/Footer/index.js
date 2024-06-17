import React from "react";
import { Typography, IconButton, Divider, Box } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default class Footer extends React.Component {
    render () {
        return (
            <Box sx={{maxWidth: "1280px", margin: "20px auto 0"}}>
                <Divider sx={{borderColor: "#333333"}} />
                <Box sx={{padding: "10px 0 0"}}>
                    <IconButton aria-label="Linkedin.com" onClick={() => window.open('https://www.n4w.io/', '_blank')}>
                        <LanguageIcon fontSize="large" />
                    </IconButton>
                    <IconButton aria-label="Linkedin.com" onClick={() => window.open('https://www.linkedin.com/company/n4w-web-solutions', '_blank')}>
                        <LinkedInIcon fontSize="large" />
                    </IconButton>
                    <Typography variant="caption" color="textSecondary">© {new Date().getFullYear()} Todos os direitos reservados.</Typography>
                </Box> 
            </Box>
        )
    }
}