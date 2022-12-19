import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {firstName: false, lastName: false}

  onClickShowFirstName = () => {
    this.setState(prevState => ({firstName: !prevState.firstName}))
  }

  onClickShowLastName = () => {
    this.setState(prevState => ({lastName: !prevState.lastName}))
  }

  render() {
    const {firstName, lastName} = this.state

    return (
      <div className="bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="flex-container">
          <div className="show-hide-name-container">
            <button
              className="button"
              type="button"
              onClick={this.onClickShowFirstName}
            >
              Show/Hide Firstname
            </button>
            {firstName && <p className="text">Joe</p>}
          </div>
          <div className="show-hide-name-container">
            <button
              className="button"
              type="button"
              onClick={this.onClickShowLastName}
            >
              Show/Hide Lastname
            </button>
            {lastName && <p className="text">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
