import React from 'react' //Import to use JSX

export default function First() {
    const msg = 'Welcome!'
    return (
        <div>
            <h2>My first component</h2>
            <p>{msg}</p>
        </div>
    )
} 