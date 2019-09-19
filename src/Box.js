import React from 'react';


class Box extends React.Component {
  static defaultProps = {
    backgroundColor: "navy",
    width: "100",
    height: "100"
  };
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  };

  handleClick(evt) {
    debugger;
    this.props.removeBox(this._reactInternalFiber.key);
  };

  render() {
    let widthNumPx = this.props.width + "px";
    let heightNumPx = this.props.height + "px";
    return (
      <div >
        <div style={{ backgroundColor: this.props.backgroundColor, width: widthNumPx, height: heightNumPx }} className="box">
        </div>
        <button onClick={this.handleClick}>x</button>
      </div>
    )
  }
}

export default Box;
