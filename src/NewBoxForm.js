import React from 'react';



class NewBoxForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { backgroundColor: '', width: '', height: ''}
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(evt) {
       this.setState({[evt.target.name]: evt.target.value})
  }
  handleSubmit(evt) {
    evt.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({backgroundColor: '', width: '', height: ''});

  }

  render() {
  return (
    <div>
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="backgroundColor">Background color: </label>
        <input id="backgroundColor" name="backgroundColor" value={this.state.backgroundColor} onChange={this.handleChange}></input>

        <label htmlFor="width">Width: </label>
        <input id="width" name="width" value={this.state.width} onChange={this.handleChange}></input>

        <label htmlFor="height">Height: </label>
        <input id="height" name="height" value={this.state.height} onChange={this.handleChange}></input>
        <button>Create a new Box!</button>

      </form>
    </div>
  );
  }
}

export default NewBoxForm;