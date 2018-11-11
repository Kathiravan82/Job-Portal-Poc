import React, { Component } from 'react';
import HeaderComponent from './shared/headerComponents/headerComponent.jsx'
import LeftBlockComponent from './shared/filterComponents/leftBlockComponent.jsx'
import RightBlockComponent from './shared/filterComponents/rightBlockComponent.jsx'
import FooterComponent from './shared/footerComponents/footerComponent.jsx'
import SearchComponent from './shared/filterComponents/searchComponent.jsx'
import JobList from './shared/filterComponents/jobList.jsx'
import './App.css';
import { Layout,Row,Col,Input } from 'antd';

const { Footer } = Layout;
const Search = Input.Search;

export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      filterValues:{},
      gs:{}
    }
    this.handleChange=this.handleChange.bind(this);
    this.handleGlobalSearchChange=this.handleGlobalSearchChange.bind(this);
  }
  handleChange(value){
    console.log("value--"+value);
    this.setState({
      filterValues:value
    })

  }
  handleGlobalSearchChange(value){
    console.log("value--"+value);
    this.setState({
      gs:value
    })

  }
  render() {
    const filterValues=this.state.filterValues;
    const globalSearch=this.state.gs;
    console.log("AppJs",filterValues)
    return (
      <Layout>
      <HeaderComponent />
      <Layout className="SearchContainer mainContainer">
        <SearchComponent globalSearch={globalSearch} handleChange={this.handleGlobalSearchChange} />
      </Layout>
      <Layout className='mainContainer'>
         <Row>
            <Col xs={24} sm={24} md={6} lg={6} xl={6} className='leftContainer' >
            <LeftBlockComponent filterValues={filterValues} handleChange={this.handleChange} /></Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={12} className='middleContainer' ><JobList filterValues={filterValues} globalSearch={globalSearch} handleChange={this.handleChange} /></Col>
            <Col xs={24} sm={24} md={6} lg={6} xl={6} className='rightContainer' ><RightBlockComponent /></Col>

         </Row>
      </Layout>
      <FooterComponent/>
    </Layout>
    );
  }
}
