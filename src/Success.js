import { SmileOutlined } from '@ant-design/icons';
import { Result } from 'antd';
const Success = () => (
  <Result
    icon={<SmileOutlined />}
    title="Great, This is a security software!"
  />
);
export default Success;