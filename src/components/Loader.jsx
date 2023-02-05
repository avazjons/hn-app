import { Space, Spin } from 'antd';

export const Loader = () => {
    return (
        <Space direction="vertical" style={{ width: '100%' }}>
            <Spin tip="Loading">
                <div className="content" />
            </Spin>
        </Space>
    )
}