import React from 'react'
import First from './components/basics/First'
import ParamComponent from './components/basics/ParamComponent'
import Fragment from './components/basics/Fragment'
import Random from './components/basics/Random'
import Card from './components/layout/Card'

export default () =>

    <div id="app">
        <h1>Fundamentos React</h1>
        <Card title="Example card"></Card>

        <Card title="Example card">
            <Random min="2" max="5" />
        </Card>
        
        <Random min="21" max="500" />
        <hr />
        <Fragment />
        <hr />
        <ParamComponent
            title="Nice Component"
            subtitle="Awesome!"
            username="SidiBecker" />
        <hr />
        <First />

    </div>

