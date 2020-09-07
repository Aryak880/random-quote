import React from 'react';
import './style/imageComponent.css';

function RandomImage(props){
 
        return(
            <div className="imageContainer">
                <img src={props.url} alt="random" />
            </div>
        );
}

export default RandomImage;