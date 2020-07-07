import './index.css'

import ReactDOM from 'react-dom'
import React from 'react' //Import to use JSX
import First from './components/basics/First'
import ParamComponent from './components/basics/ParamComponent'

ReactDOM.render(
    <div id="app">
        <First></First>
        <ParamComponent
            title="Nice Component"
            subtitle="Awesome!"
            username="SidiBecker"></ParamComponent>
    </div>,
    document.getElementById('root'))