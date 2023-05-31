import {Result } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
const Fail = () => (
  <Result
     icon={<ExclamationCircleOutlined />}
    title="Carefully install"
  />
);
export default Fail;