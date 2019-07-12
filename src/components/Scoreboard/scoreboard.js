import React from "react";
import "./scoreboard.css";

const Scoreboard = props => (
    <div className="col-12 score-board">
        <p>Score: {props.score} | High Score: {props.highScore}</p>
    </div>
);

export default Scoreboard;