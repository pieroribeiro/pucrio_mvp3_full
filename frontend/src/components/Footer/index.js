import React from "react";
import { Box, Container, Typography, Grid, Link } from '@mui/material';

export default class Footer extends React.Component {
    render () {
        return (
            <Box
                component="footer"
                sx={{
                    py: 3,
                    px: 2,
                    mt: 'auto',
                    backgroundColor: (theme) => theme.palette.mode === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
                }}
            >
                <Container maxWidth="lg">
                    <Grid container spacing={4}>
                        <Grid item xs={12} sm={6} md={4}>
                        <Typography variant="h6" gutterBottom>
                            MVP3 - PUC RIO
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            Projeto desenvolvido para a disciplina Desenvolvimento Fullstack da PUC Rio.
                        </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                        <Typography variant="h6" gutterBottom>
                            Links
                        </Typography>
                        <Link href="#" variant="body2" color="inherit" display="block" gutterBottom>
                            Home
                        </Link>
                        <Link href="#" variant="body2" color="inherit" display="block" gutterBottom>
                            Sobre
                        </Link>
                        <Link href="#" variant="body2" color="inherit" display="block" gutterBottom>
                            Contato
                        </Link>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                        <Typography variant="h6" gutterBottom>
                            Contato
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            Email: webmaster@n4w.io
                        </Typography>
                        </Grid>
                    </Grid>
                    <Box mt={3} textAlign="center">
                        <Typography variant="caption" color="textSecondary">
                        © {new Date().getFullYear()} Todos os direitos reservados.
                        </Typography>
                    </Box>
                </Container>
            </Box>
        )
    }
}