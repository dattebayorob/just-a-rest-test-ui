import React from 'react'
import loading from './loading.gif'
import './styles.css'

export default props => 
    props.show?
    (<div className="loading">
        <img src={loading} alt="Loading..." />
    </div>):''