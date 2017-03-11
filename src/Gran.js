import React, { Component } from 'react';
import { Card, CardMedia, CardTitle/*, CardText, CardActions*/ } from 'react-toolbox/lib/card';
import Tooltip from 'react-toolbox/lib/tooltip';
import Link from 'react-toolbox/lib/link';

const TooltipLink = Tooltip(Link);

class Gran extends Component {
    parentId = '';
    children = [];
    render(){
        return (
        <Card className={'gran'} style={{width: '350px', marginRight: '5px', display: 'inline-flex'}}>
            <CardTitle
                avatar="https://placeimg.com/80/80/animals"
                title={this.props.fullName}
                subtitle={this.props.notice}
            />
            <TooltipLink href="#" icon='speaker_notes' tooltip={this.props.noticeFull}/>
            <CardMedia
                aspectRatio="wide"
                image="https://placeimg.com/800/450/nature"
            />
        </Card>)
    }
}

export default Gran;
