import React from "react";
import { Typography, Box, Card, CardMedia, CardContent } from '@mui/material';
import { Link } from "react-router-dom";
import { margin, padding, styled } from "@mui/system";

const LinkElement = styled(Link)(({ theme }) => ({
    textDecoration: 'none'    
}));

const CustomCardMedia = styled(CardMedia)({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 0,
    objectFit: 'cover',
});

const GradientBackground = styled('div')({
    
});

const CustomCardContent = styled(CardContent)({
    position: 'absolute',
    bottom: 0,
    left: 0,
    zIndex: 2,
    height: 'auto',
    width: '100%',
    padding: '10px',
    margin: 0,
    borderRadius: '0px 0px 4px 4px', // bordas arredondadas
    background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.9))', // background degradê
});

export default class Highlight extends React.Component {
    render () {
        const item = this.props?.data;

        return (
            <Box style={{maxWidth: "630px", margin: "0 auto"}}>
                <LinkElement to={`/noticia/${item?.id}`} underline="none" color="inherit">
                    <Card sx={{ maxWidth: 630, minHeight: 440, border: "none", boxShadow: "none", position: "relative" }}>
                        <CustomCardMedia
                            component="img"
                            maxHeight="440"
                            alt={item?.image?.title}
                            image={item?.image?.url}
                            onError={(e) => {
                                console.error("Error loading image:", e.target.src);
                            }}
                        />
                        <GradientBackground />
                        <CustomCardContent>
                            <Typography variant="body2" sx={{margin: 0, padding: 0, color: '#FFFFFF'}}>
                                {item?.description}
                            </Typography>
                        </CustomCardContent>
                    </Card>
                </LinkElement>
            </Box>
        )
    }
}