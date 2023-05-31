import React from 'react'

export default function Static() {
  return (
    <div className='testcontainer'>
        <p className='sback'>静态分析模型</p>
        <img src={require('./j.png')} alt='load fail' className='picture'/><br/>
        <a href="#/Upload"> <button className='sbtn'>进入工具</button></a>
    </div>
  )
}
