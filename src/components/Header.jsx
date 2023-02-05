import { Link } from 'react-router-dom'
import { Typography } from 'antd';
const { Title } = Typography;

export const Header = () => {
    return (
        <div className="Header">
            <Title level={3}>
                <Link to="/">#Hacker News Application</Link>
            </Title>
        </div>
    )
} 