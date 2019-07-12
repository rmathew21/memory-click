import React from "react";
import "./scoreboard.css";

const Scoreboard = props => (
    <div className="col-12 score-board">
        <p>SCORE: {props.score} | HIGH SCORE: {props.highScore}</p>
    </div>
);

export default Scoreboard;