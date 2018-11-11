import React, { Component } from 'react';
import { Slider, InputNumber,Checkbox, Row, Col } from 'antd';
export default class SliderComponent extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      inputOneValue: '',
      inputTwoValue: ''
    }
    this.clearAllSlider = React.createRef();
    this.handleResetSlider=this.handleResetSlider.bind(this);
    this.updateFiltervalues=this.updateFiltervalues.bind(this)
  }
  updateFiltervalues(min,max){
    const filterValues=this.props.filterValues;
    //const filterType= 'salarymin';
    let updatedMinVal = min*40*4;
    let updatedMaxVal = max*40*4;
    filterValues['salarymin']=[];
    filterValues['salarymax']=[];
    filterValues['salarymin'].push(updatedMinVal.toString())
    filterValues['salarymax'].push(updatedMaxVal.toString())
    this.props.handleChange(filterValues)
  }
  handleResetSlider(){
    //const elements = document.querySelectorAll('.ant-input-number-input');
    //elements.forEach(function(elem,i){
      this.setState({
      inputOneValue: 1,
      inputTwoValue: 40
    });
      const filterValues=this.props.filterValues;
      delete filterValues['salarymin'];
      delete filterValues['salarymax'];
      this.props.handleChange(filterValues);
    //});
  }
  onChange = (value) => {
    console.log("onChange--"+value);
    this.setState({
      inputOneValue: value[0],
      inputTwoValue: value[1]
    });
    this.updateFiltervalues(value[0],value[1]);
  }
  onAfterChange = (value) => {
    console.log("onAfterChange--"+value);
    this.setState({
      inputOneValue: value[0],
      inputTwoValue: value[1]
    });
    this.updateFiltervalues(value[0],value[1]);
  }
  onInputChange = (value) => {
    console.log("onInputChange--"+value);
    this.setState({
      inputOneValue: value
    });
    this.updateFiltervalues(value,this.state.inputTwoValue);

  }
  onInputAfterChange = (value) => {
    console.log("onInputAfterChange--"+value);
    this.setState({
      inputTwoValue: value
    });
    this.updateFiltervalues(this.state.inputOneValue,value);
  }

  render() {
    const { inputOneValue,inputTwoValue } = this.state;
    const marks = {
      1: '1',
      40: '40+',
    };
    return (
      <div className="container">
        <p><b>Pay rate/hr ($)</b> <span className='clearFilter' onClick={this.handleResetSlider}>clear</span></p>
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
        <Row>
        <Col span={24}>
          <Checkbox name="selectOtherOptions" className='availability_box'  >Include profiles without any payrates</Checkbox>
        </Col>
        </Row>
      </div>
    );
  }
}
