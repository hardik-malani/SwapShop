const express = require('express');
const { createPost, deletePost, addComment, deleteComment, getPost, getPosts, getMyPosts, getNearbyPosts, updatePost, recipientOrNotPost, getMyRecipients } = require('../controllers/post');
const { isAuthenticated } = require('../middlewares/auth');
const multerMiddleware = require('../middlewares/multerMiddleware');

const router = express.Router();


router.route("/post/upload").post(isAuthenticated, multerMiddleware.array('images', 4), createPost);
router.route("/post/:id")
    .put(isAuthenticated, updatePost)
    .delete(isAuthenticated, deletePost)
    .get(isAuthenticated, getPost);
router.get("/post", getPosts);
router.get("/me/post/recipient", isAuthenticated, getMyRecipients);
router.route("/me/post").get(isAuthenticated, getMyPosts);
router.post("/nearby/post", isAuthenticated, getNearbyPosts);
router.route("/post/recipient/:id").get(isAuthenticated, recipientOrNotPost);
router.route("/post/comment/:id")
    .put(isAuthenticated, addComment)
    .delete(isAuthenticated, deleteComment);


module.exports = router;