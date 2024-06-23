const express = require('express');
const router = express.Router();

const { getAsync } = require('../redis/index')
 
router.get('/', async (req, res) => {
    let todoCounter = await getAsync('todo_counter')
    res.json({ "added_todos": parseInt(todoCounter)  })
})

module.exports = router
