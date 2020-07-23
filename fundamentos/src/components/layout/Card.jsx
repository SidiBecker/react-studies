import React from "react";
import "./Card.css";

export default (props) => {
    const defaultColor = "#20b2aa";

    const style = {
        backgroundColor: props.color || defaultColor,
        borderColor: props.color || defaultColor,
    };

    return (
        <div className="card" style={style}>
            <div className="title" style={style}>
                {props.title}
            </div>
            <div className="content">{props.children}</div>
        </div>
    );
};
