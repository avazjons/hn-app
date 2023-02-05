import { Link } from 'react-router-dom';
import { IStory } from '../models';
import { Col, Card, Space } from 'antd';
import { timeToDate } from '../utils/timeToDate';
import { FlexContainer } from './containers/FlexContainer';

export const NewsItem = ({ story }: { story: IStory }) => {
    const { title, id, by, score, time } = story

    return (
        <Col span={24}>
            <Link to={`/news/${id}`}>
                <Card title={title} bordered={false} hoverable>
                    <FlexContainer>
                        <span><i>by:</i> {by}</span>
                        <span><i>score:</i> {score}</span>
                        <span><i>date:</i> {timeToDate(time)}</span>
                    </FlexContainer>
                </Card>
            </Link>
        </Col >
    )
}