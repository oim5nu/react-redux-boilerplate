import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import Icon from '../../../components/Icon';

class TaskItem extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    editing: false 
  };

  edit = () => {
    this.setState( {editing: true} );
  }

  handleKeyUp = (event) => {
    if (event.key === 'Enter') {
      this.save(event);
    } else if(event.key === 'Escape') {
      this.stopEditing();
    }
  }

  remove = () => {
    this.props.removeTask(this.state.task);
  }

  save = (event) => {
    if (this.state.editing) {
      const { task } = this.props;

      const title = event.target.value.trim();

      if (title.length && title !== task.title ) {
          this.props.updateTask(task, { title });
      }

      this.stopEditing();
    }
  }

  stopEditing = () => {
    this.setState({editing: false});
  }

  toggleStatus = () => {
    const { task } = this.props;
    let completed = !task.completed;
    this.props.updateTask(task, { completed }); 
  }

  renderTitle = (task) => {
    return (
      <div 
        className={classNames("mv2", "w-100", {"strike": task.completed})} 
        tabIndex="0">
        {task.title}
      </div>
    );
  }

  renderTitleInput = (task) => {
    return (
      <Input
        className="mv2 w-100" 
        autoComplete="off"
        autoFocus
        defaultValue={task.title}
        maxLength="64"
        onKeyUp={this.handleKeyUp}
        type="text"
      />
    );
  }

  render() {
    const { task } = this.props;
    const { editing } = this.state;
    //console.log('this.props.task', this.props.task);
    //console.log(`this.state.task with id${task.id} in render`, task);
    return (
      <div className="cf ph2-ns" tabIndex="0">
        <div className="fl w-10 w-10-ns pa2">
          <Button 
            className="br-pill dib"
            onClick={this.toggleStatus}
          >
          <Icon className="pt2" name="done" />
          </Button>
        </div>

        <div className="fl w-60 w-60-ns pa2">
          {editing ? this.renderTitleInput(task) : this.renderTitle(task)}
        </div>

        <div className="fl w-30 w-30-ns pa2">
          <Button
            className={classNames("br-pill", {"dib": !editing}, "mr1", {"dn": editing})}
            onClick={this.edit}
          >
            <Icon className="pt2" name="mode_edit" />
          </Button>
          <Button
            className={classNames("br-pill", {"dib": editing}, "mr1", {"dn": !editing})}
            onClick={this.stopEditing}
          >
            <Icon className="pt2" name="clear" />
          </Button>          
          <Button
            className={classNames("br-pill", {"dib": !editing}, "mr1", {"dn": editing})}
            onClick={this.remove}
          >
            <Icon className="pt2" name="delete" />
          </Button>
        </div>
      </div>
    );
  }
}

TaskItem.propTypes = {
  removeTask: PropTypes.func.isRequired,
  task: PropTypes.object.isRequired,
  updateTask: PropTypes.func.isRequired
};

export default TaskItem;
