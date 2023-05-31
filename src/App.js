import React, { Component } from 'react'
import Routeapp from './Routeapp'
import './global.css'

export default class App extends Component {

  constructor(){
    super()
    this.state={
      list:[
        {id:1,value:'静态分析',address:'#/Staticanalysis'},
        {id:2,value:'动态分析',address:'#/Dynamicanalysis'},
        {id:3,value:'分类分析',address:'#/Classifyanalysis'},
    ],
    current:1
    }
}
handleclick(id){
  this.setState({current:id})
}

render() {
return (
  <div> 
    <Routeapp></Routeapp>
    <ul>
       {
        this.state.list.map((item)=><li key={item.id} onClick={()=>this.handleclick(item.id)}> 
        <a href={item.address} className={this.state.current===item.id?'active':''} >{item.value}</a>
        </li>)
       } 
    </ul>
  </div>
)
}


/*
{this.Switchpage()}
Switchpage(){
switch (this.state.current) {
    case 1:
        return <Static/>;
    case 2:
        return <Dynamic/>;
    case 3:
        return <Classify/>;
    default:
        return null;
  }
}*/
 
}
