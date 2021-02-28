
import './App.css';

import React, { Component } from 'react'

export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      userName: '',
      passWord: '',
      errors: {}
    }
  }
  
 

  changeStatusU = (e) => {
    this.setState(() =>({
      userName: e.target.value
    }))
  }

  changeStatusP = (e) => {
    this.setState(() =>({
      passWord: e.target.value
    }))
  }


  formValidation = () => {
    const {userName, passWord} = this.state
    let isValid = true
    const errors = {}
    if(userName.length < 6) {
      errors.userLength = "Please enter more than 6 letters"
      isValid = false
    }

    if(!userName.includes('$')) {
      errors.userSign = "Please enter $ to Login in Username field"
      isValid = false
    }

    if(passWord.length < 6) {
      errors.passwordLength = "Please enter more than 8 letters or digit containing both"
      isValid = false
    }
    this.setState(()=>({
      errors
    }))
    return isValid
  }

  submitChange=(e)=>{
    e.preventDefault()
    const isValid = this.formValidation()
  }
  
  render() {
    return (
      <div>
        <form onSubmit={this.submitChange}>
          <label>User Name: </label>
          <input type='text' value={this.state.userName} onChange={this.changeStatusU} />
          <br/>
          <label>Password: </label>
          <input type='text' value={this.state.passWord} onChange={this.changeStatusP} />
          <br/>
          <button type='submit'>Login</button>
        </form>
      {Object.values(this.state.errors).map((key) => {
       return <div key= {key}> {key} </div>
      })}
      
      </div>
    )
  }
}


export default App




