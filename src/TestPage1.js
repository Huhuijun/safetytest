import axios from 'axios';
import { useState,useEffect } from 'react';
import Success from './Success';
import Fail from './Fail';
import Loading from './Loading';
export default function TestPage1() {
   
    const[confirm,setConfirm]=useState(2)
    useEffect(()=>{
      axios.get('http://123.56.9.154:8081/file/hello')
      .then(response => {
        // 处理请求成功的响应信息
        console.log(response.data);
        setConfirm(1);
      })
      .catch(error => {
        // 处理请求失败的错误信息
        setConfirm(0);
        console.log(error);
      });
    },[])//只请求一次
   

  return (
    <div>
    {confirm===2 ? <Loading /> : confirm? <Success/>: <Fail />} 
    {
      confirm!==2?<div>
      分析结果报告：
      <ol className='testinfo'>
        <li>短消息操作信息泄露风险n处</li>
        <li>手机设备信息泄露风险n处</li>
        <li>网络操作信息泄露风险n处</li>
        <li>综合判断此程序检测结果：</li>
      </ol>
      </div>:<div></div> 
    }
    </div>
   
  );
}
