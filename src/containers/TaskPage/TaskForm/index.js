import React from 'react';
import PropTypes from 'prop-types';
//import Input from '../Input';

class TaskForm extends React.Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
  }

  state = {title: ''};

  clearInput = () => {
    this.setState({title: ''});
  }

  handleChange = (event) => {
    this.setState({title: event.target.value});
  }

  handleKeyUp = (event) => {
    if (event.key === 'Enter') this.clearInput();
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const title = this.state.title.trim();
    if (title.length) this.props.handleSubmit(title);
    this.clearInput();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} noValidate>
          <input
            autoComplete="off"
            autoFocus
            maxLength="64"
            onChange={this.handleChange}
            onKeyUp={this.handleKeyUp}
            placeholder="What needs to be done?"
            type="text"
            value={this.state.title}
          />
        </form>
        {/*<Input />*/}
      </div>
    );
  }
}

export default TaskForm;


