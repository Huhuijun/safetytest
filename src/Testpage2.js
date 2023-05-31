import axios from 'axios';
import React from 'react'

export default function TestPage2() {
  let file
  let changeHandler=(evt)=>{
     console.log(evt.target.files[0]) 
       file=evt.target.files[0];
       console.log(file)
  }
  let clickHandler=()=>{
      const fd=new FormData();
      fd.append('file',file);
      console.log(file);
      axios.post('http://123.56.9.154:8081/file/upload', fd, {
      
        headers: {
          'Content-Type': 'form-data'
        }
      })
      .then(res=>{
        console.log('upload success');
      })
      .catch(err=>{
        console.log(err);
      })
  }

  return (
    <div>Testpage2
      <div>
        <input type='file' onChange={changeHandler}/>
        <button onClick={clickHandler}>上传</button>
      </div>
    </div>
  )
  
  // 文件选择方法 
}
