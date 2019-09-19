import React from 'react';
import NewBoxForm from './NewBoxForm'
import uuid from 'uuid/v4';
import Box from './Box';


class BoxList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boxes: []
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.deleteBox = this.deleteBox.bind(this);
  }

  createBox() {
    return (
      <div className="boxContainer">
        {this.state.boxes.map(box =>
          <Box key={box.id} backgroundColor={box.backgroundColor}
            width={box.width}
            height={box.height} removeBox={this.deleteBox} />)}
      </div>

    )


  }

  handleChange(evt) {
    this.setState({ [evt.target]: evt.target.value })
  }

  deleteBox(id) {
    debugger;
    this.setState(state => ({
      boxes: state.boxes.filter(key => key.id !== id)
    })
    )
  }

  onSubmit(boxData) {
    let newBox = { ...boxData, id: uuid() };
    this.setState(state => ({
      boxes: [...state.boxes, newBox]
    }));

  }

  render() {
    return (
      <div>
        <NewBoxForm onSubmit={this.onSubmit} />
        {this.createBox()}
      </div>
    );
  }
}

export default BoxList;
