// Write your JS code here
import {Component} from 'react'

import './index.css'

const errorMsg = 'required'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    firstNameError: false,
    lastNameError: false,
  }

  onChangeFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  onChangeLastName = event => {
    this.setState({lastName: event.target.value})
  }

  renderFirstName = () => {
    const {firstName} = this.state
    return (
      <>
        <label className="input-label" htmlFor="firstName">
          FIRST NAME
        </label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          placeholder="First Name"
          onChange={this.onChangeFirstName}
          className="input-box"
        />
      </>
    )
  }

  renderLastName = () => {
    const {lastName} = this.state
    return (
      <>
        <label className="input-label" htmlFor="lastName">
          LAST NAME
        </label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          placeholder="Last Name"
          onChange={this.onChangeLastName}
          className="input-box"
        />
      </>
    )
  }

  firstNameError = () => [this.setState({firstNameError: true})]

  lastNameError = () => [this.setState({lastNameError: true})]

  submitForm = event => {
    event.preventDefault()
    const {firstName, lastName} = this.state

    if (firstName === '') {
      this.firstNameError()
    } else if (lastName === '') {
      this.lastNameError()
    } else if (firstName === '' && lastName === '') {
      this.firstNameError()
      this.lastNameError()
    } else {
      this.successSubmit()
    }
  }

  render() {
    const {firstNameError, lastNameError} = this.state
    return (
      <div className="bg-container">
        <h1 className="main-heading">Registration</h1>
        <form className="form-container" onSubmit={this.submitForm}>
          <div className="input-container">{this.renderFirstName()}</div>
          {firstNameError && <p>{errorMsg}</p>}
          <div className="input-container">{this.renderLastName()}</div>
          {lastNameError && <p>{errorMsg}</p>}
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    )
  }
}

export default RegistrationForm
