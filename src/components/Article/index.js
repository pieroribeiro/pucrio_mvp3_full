import React from "react";
import { Box, CardMedia, CardContent, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import formatDate from "../../utils/formatDate";

const Media = styled(CardMedia)({
    height: 0,
    paddingTop: '56.25%', // 16:9
});

export default class Article extends React.Component {
    render () {
        const newsData = this.props?.data;

        return (
            <Box>
                {newsData?.title && (
                    <>
                        <Typography variant="h1" sx={{fontSize: "30px"}} color="textPrimary" component="h1">
                            {newsData?.title}
                        </Typography>
                        <Typography variant="body2" sx={{margin: "20px 0 0 0"}} color="textPrimary" component="h5">
                            {formatDate(newsData?.publishedAt, {}) || 'Data não disponível'}
                        </Typography>
                    </>
                )}
                {newsData?.image?.url && (
                    <Media sx={{margin: "20px 0 0 0"}}
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
            </Box>
        )
    }
}
