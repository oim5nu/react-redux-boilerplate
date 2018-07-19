import React from 'react';
import PropTypes from 'prop-types';
//import Input from '../Input';

class TaskForm extends React.Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    className: PropTypes.string
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
    const { className } = this.props; 
    return (
      <div className={className} >
        <form onSubmit={this.handleSubmit} noValidate>
          <input
            className="w-100 w-80-ns"
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


