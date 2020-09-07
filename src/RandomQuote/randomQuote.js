import React from 'react';
import './style/quote.css';

function RandomQuote(props){
        const style = {
            color: props.color,
        }

        return(
            <div className="quoteContainer" style={style}>
                <div className="quote"><b>{props.content}</b></div>
                <br />
                <div className="author"><em>-{props.author}</em></div>

            </div>
        )
 
}

export default RandomQuote;
