import React from "react";
import { Card, CardHeader, CardMedia, CardContent, Typography, Avatar } from '@mui/material';
import { styled } from '@mui/material/styles';
import formatDate from "../../utils/formatDate";

const Media = styled(CardMedia)({
    height: 0,
    paddingTop: '56.25%', // 16:9
});
  
const AvatarStyled = styled(Avatar)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
}));

export default class Article extends React.Component {
    render () {
        const newsData = this.props?.data;

        return (
            <Card>
                {newsData?.title && (
                    <CardHeader
                        avatar={<AvatarStyled aria-label="news">N</AvatarStyled>}
                        title={newsData?.title}
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
