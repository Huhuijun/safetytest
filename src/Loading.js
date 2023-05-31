import { Alert, Space, Spin } from 'antd';
const Loading = () => (
  <Space
    direction="vertical"
    style={{
      width: '100%',
    }}
  >   

    <Spin tip="Loading...">
      <Alert
        message="正在加载"
      />
    </Spin>
  </Space>
);
export default Loading;