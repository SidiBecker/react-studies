import React from 'react' //Import to use JSX

export default function ParamComponent(props) {
    console.log(props)

    function openRepo() {
        window.open(`https://github.com/${props.username}`, '_target');
    }

    return (
        <div>
            <h2>{props.title}</h2>
            <h3>{props.subtitle}</h3>
            <p>Visit my repository profile in <a href="#" onClick={openRepo}>GitHub</a>. </p>
        </div>
    )
}

