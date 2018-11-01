import React, { Component } from 'react';
import { Slider, InputNumber, Row, Col } from 'antd';

export default class SliderComponent extends React.Component {
  state = {
    inputOneValue: 1,
    inputTwoValue: 40
  }

  onChange = (value) => {
    console.log(value);
    this.setState({
      inputOneValue: value[0],
    });
  }
  onAfterChange = (value) => {
    this.setState({
      inputTwoValue: value[1],
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
        <p><b>Pay rate/hr ($)</b> <span className='clearFilter'>clear</span></p>
      <Row>
        <Col span={6}>
          <InputNumber
            min={1}
            max={40}
            defaultValue={1}
            style={{ marginRight: 16 }}
            value={inputOneValue}
            onChange={this.onChange}
            onAfterChange={this.onAfterChange}
            />
        </Col>
        <Col span={6}>
          <InputNumber
            min={1}
            max={40}
            style={{ marginLeft: 16 }}
            value={inputTwoValue}
            onChange={this.onChange}
            onAfterChange={this.onAfterChange}
          />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Slider
            range
            min={1}
            max={40}
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
