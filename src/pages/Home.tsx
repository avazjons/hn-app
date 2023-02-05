import { observer } from 'mobx-react';
import { newsStore } from "../store/NewsStore"
import { Button, Row } from 'antd';
import { ReloadOutlined } from '@ant-design/icons';
import { Loader } from "../components/Loader";
import { NewsItem } from '../components/NewsItem';


export const Home: React.FC = observer(() => {
    const { isLoading, storyList } = newsStore;

    return (
        <>
            {
                isLoading ? <Loader /> : <Button icon={<ReloadOutlined />} className="btn-update">Update</Button>
            }
            {
                storyList && <Row gutter={[16, 16]}>
                    {storyList.map((story) => <NewsItem key={story.id} story={story} />)}
                </Row>
            }
        </>
    )
})