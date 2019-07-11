import React from 'react';

const Jcard = props => (
    <div className="card">
        <div className="img-container">
            <a onClick={() => props.shuffleShoes(props.name)}
                className={props.score === 0 ? "style-click" : "style-click" }
                >
                <img alt={props.name} src={props.image} />
                </a>
        </div>
    </div>
);

export default Jcard;