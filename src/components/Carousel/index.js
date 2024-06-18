import { Box, Button, Grid } from '@mui/material';
import React from 'react';
import CardItem from '../Card-Item';

export default class Carousel extends React.Component {
    constructor (props) {
        super(props)
        this.next = this.next.bind(this);
        this.prev = this.prev.bind(this);
        this.getItemsByPage = this.getItemsByPage.bind(this);
        
        this.itemsToScroll = props?.itemsToScroll || 3;
        this.styles = props?.styles || {};
                        
        this.state = {
            actualPage: 0,
            items: []
        };
    }
    
    componentDidMount() {
        setTimeout(() => {
            this.data = this.props.data || [];
            this.totalItems = this.data.length || 0;
            this.totalPages = Math.floor( this.totalItems / this.itemsToScroll );
            this.gridViewItems = Math.floor(12 / this.itemsToScroll);
              
            this.setState({
                actualPage: 0,
                items: this.getItemsByPage(0)
            });
        }, 200);
    }

    getItemsByPage (page) {
        const firstItem = (page * this.itemsToScroll);
        const lastItem = ((page * this.itemsToScroll) + (this.itemsToScroll - 1));
        let items = [];
        for (let a = firstItem; a <= lastItem; a++) {
            items.push(a);
        }
        return items;
    }

    next () {
        if (this.state.actualPage < this.totalPages) {
            this.setState({
                actualPage: this.state.actualPage + 1,
                items: this.getItemsByPage(this.state.actualPage + 1)
            });
        }
    }

    prev () {
        if (this.state.actualPage > 1) {
            this.setState({
                actualPage: this.state.actualPage - 1,
                items: this.getItemsByPage(this.state.actualPage - 1)
            });
        }
    }

    render () {
        const { items } = this.state;

        if (items.length > 0) {
            return (
                <Box sx={this.styles}>
                    <Grid container spacing={2}>
                        {items.map((item, i) => (
                            <Grid item xs={this.gridViewItems} key={i}>
                                <CardItem data={this.data[item]} />
                            </Grid>
                        ))}
                    </Grid>
                    <Button onClick={() => this.prev()}>{"\u2770"}</Button>
                    <Button onClick={() => this.next()}>{"\u2771"}</Button>
                </Box>
            )
        }
    }
}
