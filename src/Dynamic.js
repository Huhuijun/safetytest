import React from 'react'

export default function Dynamic() {
  return (
    <div className='testcontainer'>
        <p className='dback'>动态分析模型</p>
        <img src={require('./d.png')} alt='load fail' className='picture'/>
        <a href="#/Upload"><button className='dbtn'>进入工具</button></a>
    </div>
  )
}