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

export default class ArticleList extends React.Component {
    render () {        
        const styles = this.props?.styles || {}
        const newsList = this.props?.data;

        return (
            <Grid sx={styles} container spacing={2}>
                {newsList.map((news, index) => (
                    <GridElement item key={index} xs={12} sm={6} md={4} lg={3}>
                        <LinkCard to={`/noticia/${news?.id}`} underline="none" color="inherit">
                            <CardRoot>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={news?.image?.url}
                                    alt={news?.image?.title}
                                />
                                <CardHeader
                                    title={
                                        <Box minHeight={120}>
                                            <Typography variant="body1" color="#828282" sx={{fontSize: "16px"}}>{news?.title}</Typography>
                                        </Box>
                                    }
                                    subheader={<Typography variant="body1" color="#828282" sx={{fontSize: "14px"}}>{formatDate(news?.publishedAt)}</Typography>}
                                />
                            </CardRoot>
                        </LinkCard>
                    </GridElement>
                ))}
            </Grid>
        )
    }
}
