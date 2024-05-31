import React from "react";
import { Box, Grid, Card, CardHeader, CardMedia, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import formatDate from "../../utils/formatDate";
import { Link } from "react-router-dom";

const GridElement = styled(Grid)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    textAlign: 'left'
}));

const CardRoot = styled(Card)(({ theme }) => ({
    minHeight: 300
}));

const LinkCard = styled(Link)(({ theme }) => ({
    textDecoration: 'none'
}));

const CardMediaElement = styled(CardMedia)(({ theme }) => ({
    // paddingTop: '56.25%', // Mantém a proporção 16:9 da imagem
}));

export default class ArticleList extends React.Component {
    render () {
        const newsList = this.props?.data;

        return (
            <Grid container spacing={3}>
                {newsList.map((news, index) => (
                    <GridElement item key={index} xs={12} sm={6} md={4} lg={3}>
                        <LinkCard to={`/noticia/${news.id}`} underline="none" color="inherit">
                            <CardRoot>
                                <CardMediaElement
                                    component="img"
                                    height="140"
                                    image={news.image}
                                    alt={news.title}
                                />
                                <CardHeader
                                    title={
                                        <Box minHeight={120}>
                                            <Typography variant="h6">{news?.title}</Typography>
                                        </Box>
                                    }
                                    subheader={<Typography variant="body1">{formatDate(news?.publishDate)}</Typography>}
                                />
                            </CardRoot>
                        </LinkCard>
                    </GridElement>
                ))}
            </Grid>
        )
    }
}
