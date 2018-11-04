import React, { Component } from 'react';
import { Slider, InputNumber, Row, Col } from 'antd';

export default class SliderComponent extends React.Component {
  state = {
    inputOneValue: 1,
    inputTwoValue: 40
  }
  handleResetSlider(e){
    const elements = document.querySelectorAll('.ant-input-number-input');
    elements.forEach(function(elem){
      //elem.value='';
      console.log(elem)
    });
  }
  onChange = (value) => {
    console.log(value);
    this.setState({
      inputOneValue: value[0],
      inputTwoValue: value[1]
    });
  }
  onAfterChange = (value) => {
    this.setState({
      inputOneValue: value[0],
      inputTwoValue: value[1]
    });
  }
  onInputChange = (value) => {
    console.log("onInputChange--"+value);
    this.setState({
      inputOneValue: value
    });
  }
  onInputAfterChange = (value) => {
    console.log("onInputAfterChange--"+value);
    this.setState({
      inputTwoValue: value
    });
  }

  render() {
    const { inputOneValue,inputTwoValue } = this.state;
    const marks = {
      1: '1',
      40: '40+',
    };
    return (
      <div className="container">
        <p><b>Pay rate/hr ($)</b> <span className='clearFilter' onClick={this.handleReset}>clear</span></p>
      <Row>
        <Col span={6}>
          <InputNumber
            min={1}
            max={40}
            defaultValue={1}
            style={{ marginRight: 16 }}
            value={inputOneValue}
            onChange={this.onInputChange}
            />
        </Col>
        <Col span={6}>
          <InputNumber
            min={1}
            max={40}
            style={{ marginLeft: 16 }}
            value={inputTwoValue}
            onChange={this.onInputAfterChange}
          />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Slider
            range
            min={1}
            max={40}
            value={[inputOneValue,inputTwoValue]}
            marks={marks}
            onChange={this.onChange}
            onAfterChange={this.onAfterChange}
          />
        </Col>
        </Row>
      </div>
    );
  }
}
