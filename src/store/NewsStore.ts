import { makeAutoObservable, runInAction } from "mobx";
import { IStory } from "../models";
import { getStoryIds, getStoryById } from '../services/hnApi'

class NewsStore {
    constructor() {
        makeAutoObservable(this);
        this.getStories();
    }

    isLoading = false;
    storyList: IStory[] = [];

    updateStories() {

    }

    getStories = async () => {
        try {
            this.isLoading = true;
            const result = await getStoryIds();
            if (result === null) return console.log("Server Error");

            result.map((id: number) => this.getStory(id))
        } finally {
            runInAction(() => {
                this.isLoading = false;
            })
        }
    }

    getStory = async (id: number) => {
        try {
            this.isLoading = true;
            const result = await getStoryById(id);
            if (result === null) return console.log("Server Error");

            runInAction(() => {
                this.storyList.push(result);
            })
        } finally {
            runInAction(() => {
                this.isLoading = false;
            })
        }
    }

}

const newsStore = new NewsStore();
export { newsStore }