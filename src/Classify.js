import React from 'react'

export default function Classify() {
  return (
    <div className='testcontainer'>
        <p className='cback'>分类分析模型</p>
        <img src={require('./c.png')} alt='load fail' className='picture'/>
        <a href="#/Upload"> <button className='cbtn'>进入工具</button></a>
    </div>
  )
}
