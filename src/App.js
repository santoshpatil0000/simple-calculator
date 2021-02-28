import React, { Component } from 'react'
import './App.css'
import Button from './calculator/Button'
import Clear from './calculator/Clear'
import Input from './calculator/Input'

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       input: '',
       prevNumber: '',
       currentNumber: '',
       operatorSign: ''

    }
  }


  addToInput = (num) => {
    this.setState({
      input: this.state.input + num
    })
    console.log(this.state.input)
  }

  addZeroToInput = (num) => {
    if (this.state.input !== '') {
      this.setState({
        input: this.state.input + num
      })
    }
  }

  addDecimalToInput = (num) => {
    if (this.state.input.indexOf('.') === -1) {
      this.setState({
        input: this.state.input + num
      })
    }
  }

  clearInput = (num) => {
    this.setState({
      input: ''
    })
  }

  add = () => {
    this.state.prevNumber = this.state.input;
    this.setState(() => ({
      input: ''
    }))
    this.state.operatorSign = 'plus'
  }

  substract = () => {
    this.state.prevNumber = this.state.input
    this.setState({
      input: ''
    })
    this.state.operatorSign = 'minus'
  }

  multiply = () => {
    this.state.prevNumber = this.state.input
    this.setState({
      input: ''
    })
    this.state.operatorSign = 'into'
  }

  division = () => {
    this.state.prevNumber = this.state.input
    this.setState({
      input: ''
    })
    this.state.operatorSign = 'devide'
  }

  evaluate = () => {
    this.state.currentNumber = this.state.input
    if (this.state.operatorSign === 'plus') {
        this.setState({
          input: parseFloat(this.state.prevNumber) + parseFloat(this.state.currentNumber)
        }, () => {console.log(typeof(this.state.input))})
        
        
    } else if (this.state.operatorSign === 'minus') {
      this.setState({
        input: parseFloat(this.state.prevNumber) - parseFloat(this.state.currentNumber)
      })
    } else if (this.state.operatorSign === 'into') {
      this.setState({
        input: parseFloat(this.state.prevNumber) * parseFloat(this.state.currentNumber)
      })
    } else if (this.state.operatorSign === 'devide') {
      this.setState({
        input: parseFloat(this.state.prevNumber) / parseFloat(this.state.currentNumber)
      })
    }
      
    
  }
  
  render() {
    return (

      <div className='App'>
        <div className='calc-wrapped'>
          <div className='row'>
          <Input>{this.state.input}</Input>
          
          </div>
          <div className='row'>
            <Button clickHandler={this.addToInput}>7</Button>
            <Button clickHandler={this.addToInput}>8</Button>
            <Button clickHandler={this.addToInput}>9</Button>
            <Button clickHandler={this.division}>/</Button>

          </div>
          <div className='row'>
            <Button clickHandler={this.addToInput}>4</Button>
            <Button clickHandler={this.addToInput}>5</Button>
            <Button clickHandler={this.addToInput}>6</Button>
            <Button clickHandler={this.multiply}>*</Button>

          </div>
          <div className='row'>
            <Button clickHandler={this.addToInput}>1</Button>
            <Button clickHandler={this.addToInput}>2</Button>
            <Button clickHandler={this.addToInput}>3</Button>
            <Button clickHandler={this.substract}>-</Button>

          </div>
          <div className='row'>
            <Button clickHandler={this.addDecimalToInput}>.</Button>
            <Button clickHandler={this.addZeroToInput}>0</Button>
            <Button clickHandler={this.evaluate}>=</Button>
            <Button clickHandler={this.add}>+</Button>

          </div>
          <div className='row'>
          <Clear clickHandler = {this.clearInput}></Clear>
          </div>

        </div>
      </div>
    )
  }
}

export default App

