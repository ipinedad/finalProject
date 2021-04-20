import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper} from '@material-ui/core'

import './quotes.styles.css';

function Quotes(props)
{
    var quotes = [
        {
            quote: '"A genuine leader is not a searcher for consensus but a molder of consensus"',
            author: "- Martin Luther King Jr. "
        },
        {
            quote: '"The Greatest leader is not necessarily the one who does the greatest things. He is the one that gets the people to do the greatest things."',
            author: '- Ronald Regan'
        },
        {
            quote: '"A leader is best when people barely know he exists, when his work is done, his aim fulfilled, they will say: we did it ourselves."',
            author:'- Lao Tzu'
        },
        {
            quote: '"Before you are a leader, success is all about growing yourself. When you become a leader, success is all about growing others"' ,
            author:'- Jack Welch'
        },
        {
            quote: '"My own definition of leadership is this: The capacity and the will to rally men and women to a common purpose and the character which inspires confidence."',
            author: '- General Montgomery'
        }
    ]

    return (
        <Carousel className="carousel">
            {
                quotes.map( (quote, i) => <Item key={i} item={quote} /> )
            }
        </Carousel>
    )
}

function Item(props)
{
    return (
        <Paper>
            <h2 id="quote-body">{props.item.quote}</h2>
            <p id="quote-author">{props.item.author}</p>
        </Paper>
    )
}

export default Quotes;