import React from 'react'

export default function buttonnav(props) {
        let list=[
            {id:1,value:'静态分析'},
            {id:2,value:'动态分析'},
            {id:3,value:'静态分析'},
        ]
        let current=1
  return (
    <div>Nav
   { this.Switchpage()}
    <ul>
       {
        this.state.list.map((item)=><li key={item.id} className={this.state.current===item.id?'active':''} 
        onClick={()=>this.handleclick(item.id)}>{item.value}</li>)
       } 
    </ul>
  </div>

  )
}
