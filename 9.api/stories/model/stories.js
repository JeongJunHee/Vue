const fs = require('fs');

class Story {
    constructor() {
        const data = fs.readFileSync('./model/data.json');
        this.data = JSON.parse(data)
    }

    getStoryList() {
        if (this.data) {
            return this.data;
        }
        else {
            return [];
        }
    }

    getStoryDetail(story_id) {
        return new Promise((resolve, reject) => {
            for (var story of this.data ) {
                if ( story.id == story_id ) {
                    resolve(story);
                    return;
                }
            }
            reject({msg:'Can not find story', code:404});
        });
    }

    addStory(story) {
        return new Promise((resolve, reject) => {
            let last = this.data[this.data.length - 1];
            let id = last.id + 1;
            let newStory = {
                "id" : id,
                "plot" : story.plot,
                "upvotes" : story.upvotes,
                "writer" : story.writer
            };
            this.data.push(newStory)
            resolve(newStory);
        });
    }

    updateStory(story_id, data) {
        return new Promise((resolve, reject) => {
            for (var story of this.data ) {
                if ( story.id == story_id ) {
                    story.plot = data.plot;
                    story.upvotes = data.upvotes;
                    story.writer = data.writer;
                    resolve(story);
                    return;
                }
            }
            reject({msg:'Can not find story', code:404});
        });
    }

    deleteStory(story_id) {
        return new Promise((resolve, reject) => {
            for (var story of this.data ) {
                if ( story.id == story_id ) {
                    this.data.splice(story, 1);
                    resolve(story);
                    return;
                }
            }
            reject({msg:'Can not find story', code:404});
        });
    }
}

module.exports = new Story();