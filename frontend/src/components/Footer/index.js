import React from "react";
import { Typography, Grid, IconButton, Divider, Box } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default class Footer extends React.Component {
    render () {
        return (
            <>
                <Divider sx={{margin: "20px auto 0"}} />
                <Box style={{maxWidth: "1280px", margin: "10px auto 0"}}>
                    <Grid container spacing={ 4 }>
                        <Grid item xs={ 1 } alignItems="center" alignContent="center">
                            <IconButton aria-label="Linkedin.com" onClick={() => window.open('https://www.n4w.io/', '_blank')}>
                                <LanguageIcon fontSize="large" />
                            </IconButton>
                        </Grid>
                        <Grid item xs={ 1 } alignItems="center" alignContent="center">
                            <IconButton aria-label="Linkedin.com" onClick={() => window.open('https://www.linkedin.com/company/n4w-web-solutions', '_blank')}>
                                <LinkedInIcon fontSize="large" />
                            </IconButton>
                        </Grid>
                        <Grid item xs={ 10 } alignItems="center" alignContent="center">
                            <Typography variant="caption" color="textSecondary">© {new Date().getFullYear()} Todos os direitos reservados.</Typography>
                        </Grid>
                    </Grid>
                </Box> 
            </>
        )
    }
}