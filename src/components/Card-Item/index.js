import React from "react";
import { Card, CardHeader, CardMedia, CardContent, Typography, Avatar } from '@mui/material';
import formatDate from "../../utils/formatDate";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";

const LinkElement = styled(Link)(({ theme }) => ({
    textDecoration: 'none'    
}));

const CardHeaderElement = styled(CardHeader)(({ theme }) => ({
    minHeight: 70
}));

export default class CardItem extends React.Component {
    render () {
        const data = this.props?.data || null
        if (data) {
            return (
                <LinkElement to={`/noticia/${data.id}`} underline="none" color="inherit">
                    <Card sx={{ minWidth: 310, maxWidth: 310, minHeight: 500 }}>
                        <CardHeaderElement sx={{color: "#828282", minHeight: 100}} 
                            avatar={
                                <Avatar sx={{ bgcolor: "#1976D2" }} aria-label="recipe">{data.title.substr(0, 1).toUpperCase()}</Avatar>
                            }
                            title={data?.title}
                        />
                        <CardMedia
                            component="img"
                            height="194"
                            alt={data?.image?.title}
                            image={data?.image?.url}
                            onError={(e) => {
                                console.error("Error loading image:", e.target.src);
                            }}
                        />
                        <CardContent>
                            <Typography variant="body1" sx={{fontSize: "12px", fontStyle: "italic"}} component="span" color="#828282">
                                Publicado em: {formatDate(data?.publishedAt, {})}
                            </Typography>
                            <Typography variant="body1" sx={{marginTop: "10px", fontSize: "14px"}} component="p" color="#828282">
                                {data?.description}
                            </Typography>
                        </CardContent>
                    </Card>
                </LinkElement>
            )
        } else {
            return (
                <></>
            )
        }
    }
}
