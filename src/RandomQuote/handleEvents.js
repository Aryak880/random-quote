import React from 'react'

function HandleEvents(props){
    const style={
        background: '#527DAA',
        padding: '10px 0px',
        borderRadius: 4
    }
    return(
        <div style={style}>
            <button onClick={props.handleClickText} className="btn btn-info">Change quote</button>
            <button onClick={props.handleClickImg} className="btn btn-info">Change Image</button>
            <label><input type="color" name="color" onChange={props.handleChange} /> Change text color</label>
        </div>
    )
}

export default HandleEvents;