import React from "react";
import { Card, CardHeader, CardMedia, CardContent, Typography, Avatar } from '@mui/material';
import formatDate from "../../utils/formatDate";
import { Container, styled } from "@mui/system";
import { Link } from "react-router-dom";

const ContainerElement = styled(Container)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    paddingTop: 40,
    paddingBottom: 20,
    gap: 20,
    textAlign: 'left'
}));

const LinkElement = styled(Link)(({ theme }) => ({
    textDecoration: 'none'    
}));

const CardHeaderElement = styled(CardHeader)(({ theme }) => ({
    minHeight: 100
}));

export default class LastNews extends React.Component {
    render () {
        const newsData = this.props?.data;
        return (
            <>
                {newsData ? (
                    <ContainerElement>
                        {newsData.map((item, index) => (
                            <LinkElement key={index} to={`/noticia/${item.id}`} underline="none" color="inherit">
                                <Card sx={{ maxWidth: 345, minHeight: 500 }}>
                                    <CardHeaderElement
                                        avatar={
                                            <Avatar sx={{ bgcolor: "#ff3300" }} aria-label="recipe">N</Avatar>
                                        }
                                        title={item?.title}
                                        subheader={formatDate(item?.publishedAt, {})}
                                    />
                                    <CardMedia
                                        component="img"
                                        height="194"
                                        image={item?.urlToImage}
                                    />
                                    <CardContent>
                                        <Typography variant="body2" color="text.secondary">{item?.description}</Typography>
                                    </CardContent>
                                </Card>
                            </LinkElement>
                        ))}
                    </ContainerElement>
                ) : (
                    <>
                    </>
                )}
            </>
        )
    }
}
