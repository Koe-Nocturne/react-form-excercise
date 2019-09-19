import React from 'react';
import NewBoxForm from './NewBoxForm';
import toJson from "enzyme-to-json";
import { shallow, mount } from 'enzyme';


it("renders without crashing", () => {
  shallow(<NewBoxForm/>)
});

it("matches snapshot", () => {
  let wrapper = shallow(<NewBoxForm/>);
  let serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
});



describe("allows for changes in background color, height and width", () => {
  it("can we edit background color", () => {
    let wrapper = mount(<NewBoxForm/>);
    const bgColor = wrapper.find("#backgroundColor");
    bgColor.instance().value = "blueViolet";
    bgColor.simulate("change");

    expect(wrapper.state().backgroundColor).toEqual("blueViolet");

  });

});