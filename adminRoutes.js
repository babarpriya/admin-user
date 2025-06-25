const express = require('express');
const router = express.Router();
const authAdmin = require('../middlewares/authAdmin');
const ctrl = require('../controllers/adminController');

router.get('/users', authAdmin, ctrl.getUsers);
router.patch('/users/:id/block', authAdmin, ctrl.blockUser);
router.get('/users/comment-status', authAdmin, ctrl.filterCommentStatus);
router.get('/users/blog-status', authAdmin, ctrl.filterBlogStatus);

module.exports = router;



