const express = require('express');
const story = require('../model/stories');
const router = express.Router();

router.get('/api/stories', showStoryList);
router.get('/api/stories/:id', showStoryDetail);

module.exports = router;

function showStoryList(req, res) {
    const storyList = story.getStoryList();
    res.send(storyList);
}

async function showStoryDetail(req, res) {
    try {
        const story_id = req.params.id;
        const result = await story.getStoryDetail(story_id);
        res.send(result);
    }
    catch ( error ) {
        res.status(error.code).send({msg:error.msg});
    }
}