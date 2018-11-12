import React, { Component } from 'react';
import HeaderComponent from './shared/headerComponents/headerComponent.jsx'
import LeftBlockComponent from './shared/filterComponents/leftBlockComponent.jsx'
import RightBlockComponent from './shared/filterComponents/rightBlockComponent.jsx'
import FooterComponent from './shared/footerComponents/footerComponent.jsx'
import SearchComponent from './shared/filterComponents/searchComponent.jsx'
import JobList from './shared/filterComponents/jobList.jsx'
import './App.scss';
import { Layout,Row,Col,Input } from 'antd';
import localJsonData from './shared/data/joblist.json';
import axios from 'axios'

const { Footer } = Layout;
const Search = Input.Search;
let hostName = window.location.hostname;
let jsonURL=''
export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      jsonData: [],
      filterValues:{},
      gs:{},
    }
    this.handleChange=this.handleChange.bind(this);
    this.handleGlobalSearchChange=this.handleGlobalSearchChange.bind(this);
    this.sortChange=this.sortChange.bind(this);
  }
  componentDidMount() {
    if(hostName == 'localhost'){
      jsonURL='http://localhost:9000/api/jobdescriptions/'
    }else{
      jsonURL=`${hostName}/data/joblist.json`
    }
    axios.get(jsonURL)
      .then(res => {
        const jsonData = res.data;
        this.setState({ jsonData });
      })
      .catch(err => {
        console.log(err);
        this.setState({ jsonData:localJsonData });
      })
    }
  sortChange(sortedArray){
    this.setState({ 
      jsonData: sortedArray
    });
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
    const jobData=this.state.jsonData
    console.log("AppJs",filterValues)
    console.log("window.location.hostname",window.location.hostname);
    return (
      <Layout>
      <HeaderComponent />
      <Layout className="SearchContainer mainContainer">
        <SearchComponent globalSearch={globalSearch} handleChange={this.handleGlobalSearchChange} />
      </Layout>
      <Layout className='mainContainer'>
         <Row>
            <Col xs={24} sm={24} md={6} lg={6} xl={6} className='leftContainer' >
            <LeftBlockComponent filterValues={filterValues} handleChange={this.handleChange} jsonData={jobData} /></Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={12} className='middleContainer' ><JobList filterValues={filterValues} globalSearch={globalSearch} handleChange={this.handleChange} jsonData={jobData} sortChange={this.sortChange} /></Col>
            <Col xs={24} sm={24} md={6} lg={6} xl={6} className='rightContainer' ><RightBlockComponent /></Col>

         </Row>
      </Layout>
      <FooterComponent/>
    </Layout>
    );
  }
}
