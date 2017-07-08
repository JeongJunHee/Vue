const express = require('express');
const story = require('../model/stories');
const router = express.Router();

router.get('/api/stories', showStoryList);
router.get('/api/stories/:id', showStoryDetail);

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