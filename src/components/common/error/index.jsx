import React from 'react'
import './style.css'

export default props => {
    let {errors} = props
    return (
        <div className="error">
            {errors.map(erro => {
                return <p key={erro}>{erro}</p>
            })}
        </div>
    )
}