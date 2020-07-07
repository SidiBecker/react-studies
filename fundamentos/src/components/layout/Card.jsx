import React from 'react'
import "./Card.css"

export default (props) => {
    return (
        <div className="card">
            <div className="title">{props.title}</div>
            <div className="content">Content</div>
        </div>
    )
}