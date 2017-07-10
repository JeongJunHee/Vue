const express = require('express');
const story = require('../model/stories');
const router = express.Router();

router.get('/api/stories', showStoryList);
router.get('/api/stories/:id', showStoryDetail);
router.put('/api/stories/:id', updateStory);
router.delete('/api/stories/:id', deleteStory);

module.exports = router;

function showStoryList(req, res) {
    const result = story.getStoryList();
    res.send(result);
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

async function updateStory(req, res) {
    try {
        const story_id = req.params.id;
        const data = req.body;
        const result = await story.updateStory(story_id, data);
        res.send(result);
    }
    catch ( error ) {
        res.status(error.code).send({msg:error.msg});
    }
}

async function deleteStory(req, res) {
    try {
        const story_id = req.params.id;
        const result = await story.deleteStory(story_id);
        res.send(result);
    }
    catch ( error ) {
        res.status(error.code).send({msg:error.msg});
    }
}