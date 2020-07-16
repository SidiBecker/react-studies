import React from 'react'

export default function DiretaFilho(props) {
    return (
        <div>
            <span> {props.name},</span>
            <span> {props.age}</span>
            <span> {props.bool ? 'Verdadeiro' : 'Falso'}!</span>
        </div>
    )
}
