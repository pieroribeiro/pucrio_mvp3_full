import { Box, Button, Grid } from '@mui/material';
import React from 'react';
import CardItem from '../Card-Item';

export default class Carousel extends React.Component {
    constructor (props) {
        super(props)
        this.next = this.next.bind(this);
        this.prev = this.prev.bind(this);
        this.state = {
            left: 0,
            current: 1, 
            right: 2
        }
        this.totalItems = 0
    }

    next () {
        console.log({
            buttom: 'next',
            left: this.state.left,
            current: this.state.current,
            right: this.state.right,
            totalItems: this.totalItems
        })
        if ((this.state.right + this.itemsToScroll) < this.totalItems) {
            this.setState({
                current: this.state.current + this.itemsToScroll,
                right: this.state.right + this.itemsToScroll,
                left: this.state.left + this.itemsToScroll
            });
        } else if ((this.state.right + 1) < this.totalItems) {
            this.setState({
                current: this.state.current + 1,
                right: this.state.right + 1,
                left: this.state.left + 1
            });
        } else {
            
        }
    }

    prev () {
        // console.log('prevBtn', 'before_render', {
        //     current: this.state.current,
        //     right: this.state.right,
        //     left: this.state.left
        // })
        if ((this.state.left - this.itemsToScroll) >= 0) {
            this.setState({
                current: this.state.current - this.itemsToScroll,
                right: this.state.right - this.itemsToScroll,
                left: this.state.left - this.itemsToScroll
            });
        } else if ((this.state.left - 1) >= 0) {
            this.setState({
                current: this.state.current - 1,
                right: this.state.right - 1,
                left: this.state.left - 1
            });
        }
    }

    render () {
        const data = this.props?.data || [];
        const styles = this.props?.styles || {};
        
        this.itemsToScroll = this.props?.itemsToScroll || 1;
        this.totalItems = data.length;
        
        return (
            <Box sx={styles}>
                {(data && data?.length) ? (
                    <>
                        <Grid container spacing={2}>
                            {[this.state.left, this.state.current, this.state.right].map(idx => (
                                <Grid item xs={4} key={idx}>
                                    <CardItem data={data[idx]} />
                                </Grid>
                            ))}
                        </Grid>
                        <Button onClick={() => this.prev()}>{"\u2770"}</Button>
                        <Button onClick={() => this.next()}>{"\u2771"}</Button>
                    </>
                ) : (
                    <></>
                )}
            </Box>
        )
    }
}
