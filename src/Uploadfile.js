import { InboxOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import 'antd/dist/reset.css';
import './upload.css'

const { Dragger } = Upload;
const headers={'Content-Type': 'form-data',}
const props = {
  name: 'file',
  multiple: true,
  headers:headers,
  action: 'http://123.56.9.154:8081/file/upload',//请求地址
  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.file.name);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files);
  },
};
const Uploadfile = () =>{
  return(
    <div>
         <Dragger {...props}>
    <p className="ant-upload-drag-icon">
      <InboxOutlined />
    </p>
    <p className="ant-upload-text">Click or drag file to this area to upload</p>
    <p className="ant-upload-hint">
      Support for a single or bulk upload. Strictly prohibited from uploading company data or other
      banned files.
    </p>

  </Dragger>
  
    <a href="#/Testinfo"  className='resultbtn'>查看结果</a>
   
  </div>
 
);
} 
export default Uploadfile;