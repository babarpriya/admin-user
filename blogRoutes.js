const express = require('express');
const router = express.Router();
const authUser = require('../middlewares/authUser');
const upload = require('../middlewares/upload');
const controller = require('../controllers/blogController');

router.get('/', controller.getAllBlogs);
router.get('/search', controller.searchBlogs);
router.post('/', authUser, upload.single('image'), controller.createBlog);
router.post('/:blogId/comments', authUser, controller.postComment);
router.get('/:blogId/comments', authUser, controller.getComments);

module.exports = router;



