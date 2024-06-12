import React from "react";
import { Card, CardHeader, CardMedia, CardContent, Typography, Avatar } from '@mui/material';
import { styled } from '@mui/material/styles';
import formatDate from "../../utils/formatDate";
import { color, fontSize, fontWeight } from "@mui/system";

const Media = styled(CardMedia)({
    height: 0,
    paddingTop: '56.25%', // 16:9
});
  
const AvatarStyled = styled(Avatar)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
}));

const CustomCardHeader = styled(CardHeader)(({ theme}) => ({
    ".MuiCardHeader-title": {
        fontSize: "36px",
        color: "#333333",
        fontWeight: "normal"
    },
    ".MuiCardHeader-subheader": {
        fontSize: "14px",
        color: "#828282",
        fontWeight: "normal"
    }
}));

export default class Article extends React.Component {
    render () {
        const newsData = this.props?.data;

        return (
            <Card>
                {newsData?.title && (
                    <CustomCardHeader
                        avatar={<AvatarStyled aria-label="news">N</AvatarStyled>}
                        title={newsData?.title}
                        titleTypographyProps={{component: "h1"}}
                        subheaderTypographyProps={{component: "h3"}}
                        subheader={formatDate(newsData?.publishedAt, {}) || 'Data não disponível'}
                    />
                )}
                {newsData?.image?.url && (
                    <Media
                        image={newsData?.image?.url}
                        title={newsData?.image?.title || 'Imagem da notícia'}
                    />
                )}
                <CardContent>
                    {newsData?.description && (
                    <Typography variant="body2" color="textSecondary" component="p">
                        {newsData?.description}
                    </Typography>
                    )}
                    {newsData?.content && (
                    <Typography variant="body1" component="div">
                        <div dangerouslySetInnerHTML={{ __html: newsData?.content }} />
                    </Typography>
                    )}
                </CardContent>
            </Card>
        )
    }
}
