import React from "react";
import { Card, CardHeader, CardMedia, CardContent, Typography, Avatar } from '@mui/material';
import { styled } from '@mui/material/styles';
import formatDate from "../../utils/formatDate";

const Root = styled(Card)(({ theme }) => ({
    width: '100%',
    maxWidth: 1000,
    margin: 'auto',
    marginTop: theme.spacing(3),
    flexGrow: 1,
    textAlign: 'left'
}));

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
            <Root>
                {newsData?.title && (
                    <CardHeader
                        avatar={<AvatarStyled aria-label="news">N</AvatarStyled>}
                        title={newsData?.title}
                        subheader={formatDate(newsData?.publishedAt, {}) || 'Data não disponível'}
                    />
                )}
                {newsData?.urlToImage && (
                    <Media
                        image={newsData?.urlToImage}
                        title={newsData?.title || 'Imagem da notícia'}
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
            </Root>
        )
    }
}
