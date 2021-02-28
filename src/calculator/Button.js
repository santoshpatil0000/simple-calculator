import React, { Component } from 'react'
import './Button.css'

class App extends Component {

  isOperator = (val) => {
    return( !isNaN(val) || val ==='.' || val === '=')
  }

  render() {
    return (
      

      <div className={`button ${this.isOperator(this.props.children) ? '' : 'operator'}`} onClick = {() =>this.props.clickHandler(this.props.children)}>
        
        {this.props.children} 
        
      </div>
    )
  }
}

export default App