import React, { Component } from 'react'
import './Clear.css'

export class Clear extends Component {
    render() {
        return (
            <div className='clear' onClick={() =>{this.props.clickHandler()}}>
                Clear...
            </div>
        )
    }
}

export default Clear
