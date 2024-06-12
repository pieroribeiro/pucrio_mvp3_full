import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Card, CardHeader, CardMedia, CardContent, Typography, Avatar, Divider } from '@mui/material';
import formatDate from "../../utils/formatDate";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";

const LinkElement = styled(Link)(({ theme }) => ({
    textDecoration: 'none'    
}));

const CardHeaderElement = styled(CardHeader)(({ theme }) => ({
    minHeight: 70
}));

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

export default class LastNews extends React.Component {
    render () {
        const newsData = this.props?.data;
        
        return (
            <>
                {newsData && newsData.splice(10, 40) ? (
                    <>
                        <Divider />
                        <Typography variant="h4" sx={{marginTop: "40px", fontWeight: "bold"}} color="#333333">&Uacute;ltimas Not&iacute;cias</Typography>
                        <Carousel
                            swipeable={false}
                            draggable={false}
                            showDots={false}
                            responsive={responsive}
                            infinite={true}
                            autoPlay={this.props.deviceType !== "mobile" ? true : false}
                            autoPlaySpeed={5000}
                            keyBoardControl={true}
                            customTransition="all .5"
                            transitionDuration={500}
                            containerClass="carousel-container"
                            removeArrowOnDeviceType={["tablet", "mobile"]}
                            deviceType={this.props.deviceType}
                            dotListClass="custom-dot-list-style"
                            itemClass="carousel-item-padding-20-px">
                            {newsData.map((item, index) => (
                                <LinkElement key={index} to={`/noticia/${item.id}`} underline="none" color="inherit">
                                    <Card sx={{ maxWidth: 310, minHeight: 440, marginTop: "20px" }}>
                                        <CardHeaderElement sx={{color: "#828282"}} 
                                            avatar={
                                                <Avatar sx={{ bgcolor: "#1976D2" }} aria-label="recipe">{item.title.substr(0, 1).toUpperCase()}</Avatar>
                                            }
                                            title={item?.title}
                                        />
                                        <CardMedia
                                            component="img"
                                            height="194"
                                            alt={item?.image?.title}
                                            image={item?.image?.url}
                                            onError={(e) => {
                                                console.error("Error loading image:", e.target.src);
                                            }}
                                        />
                                        <CardContent>
                                            <Typography variant="body1" sx={{fontSize: "12px", fontStyle: "italic"}} component="span" color="#828282">
                                                Publicado em: {formatDate(item?.publishedAt, {})}
                                            </Typography>
                                            <Typography variant="body1" sx={{marginTop: "10px", fontSize: "14px"}} component="p" color="#828282">
                                                {item?.description}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </LinkElement>
                            ))}
                        </Carousel>
                    </>
                ) : (
                    <>
                    </>
                )}
            </>
        )
    }
}
