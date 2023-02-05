import axios from "axios";

const baseUrl = "https://hacker-news.firebaseio.com/v0/";
const newStoriesUrl = `${baseUrl}newstories.json`;
const storyUrl = `${baseUrl}item/`;

export const getStoryIds = async () => {
    const result = await axios.get(newStoriesUrl).then(({ data }) => data);
    return result.slice(0, 10);
}

export const getStoryById = async (id: number) => {
    const result = await axios.get(`${storyUrl + id}.json`).then(({ data }) => data);
    return result;
}