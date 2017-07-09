const express = require('express');
const story = require('../model/stories');
const router = express.Router();

router.get('/api/stories', showStoryList);
router.get('/api/stories/:id', showStoryDetail);
router.put('/api/stories/:id', upvoteStory);
router.delete('/api/stories/:id', deleteStory);

module.exports = router;

function showStoryList(req, res) {
    const data = story.getStoryList();
    res.send(data);
}

async function showStoryDetail(req, res) {
    try {
        const story_id = req.params.id;
        const data = await story.getStoryDetail(story_id);
        res.send(data);
    }
    catch ( error ) {
        res.status(error.code).send({msg:error.msg});
    }
}

async function upvoteStory(req, res) {
    try {
        const story_id = req.params.id;
        const data = await story.upvoteStory(story_id);
        res.send(data);
    }
    catch ( error ) {
        res.status(error.code).send({msg:error.msg});
    }
}

async function deleteStory(req, res) {
    try {
        const story_id = req.params.id;
        const data = await story.deleteStory(story_id);
        res.send(data);
    }
    catch ( error ) {
        res.status(error.code).send({msg:error.msg});
    }
}