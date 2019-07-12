import React from 'react';
import "./Jcard.css";

const Jcard = props => 
{
    console.log(props)
    return (
        <div className="card">
            <div className="img-fluid imgSize" alt="Responsive image">
                <a onClick={() => props.handleClick(props.name)}
                    className={props.score === 0 ? "style-click" : "style-click" }
                    >
                    <img alt={props.name} src={props.src} />
                    </a>
            </div>
        </div>
    )
};

export default Jcard;