import React from 'react';
import BoxList from './BoxList';
import { shallow, mount } from 'enzyme';

describe("boxList renders", () =>{
  it("renders correctly", () => {
    let wrapper = shallow(<BoxList/>);

    expect(wrapper).toMatchSnapshot();
  });
  it("renders a box correctly", () => {
    let wrapper = mount(<BoxList/>);

    wrapper.setState({boxes: [{backgroundColor: "blueviolet", height: "150", width:"250", id: "abc"}]})

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.state().boxes.length).toEqual(1);
    expect(wrapper.state().boxes[0]).toEqual({backgroundColor: "blueviolet", height: "150", width:"250", id: expect.any(String)});
  });
});

describe("delete box", () => {
  it("can we delete a box", () => {
    let wrapper = mount(<BoxList/>);

    wrapper.setState({boxes: [{backgroundColor: "blueviolet", height: "150", width:"250", id: "abc"}]})

    wrapper.find('button').at(1).simulate('click');
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.state().boxes.length).toEqual(0);
    expect(wrapper.state().boxes[0]).toEqual(undefined);
  });
});
