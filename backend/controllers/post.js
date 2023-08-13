const Post = require('../models/Post');
const User = require('../models/User');

exports.createPost = async (req, res) => {
    try {
        console.log(req.files);
        const newPostData = {
            title: req.body.title,
            description: req.body.description,
            tags: req.body.tags,
            longitude: req.body.longitude,
            latitude: req.body.latitude,
            address: req.body.address,
            quantity: req.body.quantity,
            owner: req.user._id,
            type: req.body.type,
            images: req.files ? req.files.map(file => {
                return {
                    url: file.path,
                    public_id: file.filename,
                }
            }) : [],
        };

        const post = await Post.create(newPostData);
        const user = await User.findById(req.user._id);

        user.posts.push(post._id);
        user.save();

        res.status(201).json({
            success: true,
            post,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}


exports.deletePost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);

        if (!post) {
            return res.status(404).json({
                success: false,
                message: "Post not found",
            });
        }
        console.log(post);

        if (post.owner.toString() !== req.user._id.toString()) {
            return res.status(401).json({
                success: false,
                message: "You are not authorized to delete this post",
            });
        }
        await Post.deleteOne({ _id: req.params.id });
        const user = await User.findById(req.user._id);
        user.posts.pull(post._id);
        await user.save();

        res.status(200).json({
            success: true,
            message: "Post deleted",
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}

exports.recipientOrNotPost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);

        if (post.recipients.find((recipient) => recipient.user.toString() === req.user._id.toString())) {
            post.recipients.pull({
                user: req.user._id,
            });
            await post.save();
            return res.status(200).json({
                success: true,
                message: "Interest Removed",
            });
        } else {
            post.recipients.push({
                user: req.user._id,
            });
            await post.save();
            return res.status(200).json({
                success: true,
                message: "Interest Added",
            });
        }
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}

exports.addComment = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);

        if (!post) {
            return res.status(404).json({
                success: false,
                message: "Post not found",
            });
        }

        let commentExits = post.comments.find(
            (comment) => comment.user.toString() === req.user._id.toString()
        );

        if (commentExits) {
            commentExits.comment = req.body.comment;

            await post.save();

            return res.status(200).json({
                success: true,
                message: "Comment updated",
            });
        }

        const comment = {
            user: req.user._id,
            comment: req.body.comment,
        };

        post.comments.push(comment);
        await post.save();

        res.status(200).json({
            success: true,
            message: "Comment added",
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}

exports.deleteComment = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);

        if (!post) {
            return res.status(404).json({
                success: false,
                message: "Post not found",
            });
        }

        if (post.owner.toString() === req.user._id.toString()) {

            if (!req.body.commentId) {
                let commentExits = post.comments.find(
                    (comment) => comment.user.toString() === req.user._id.toString()
                );

                if (!commentExits) {
                    return res.status(404).json({
                        success: false,
                        message: "Comment Id is Required",
                    });
                }

                post.comments.pull(commentExits._id);

                await post.save();

                return res.status(200).json({
                    success: true,
                    message: "Comment deleted",
                });
            }

            let commentExits = post.comments.find(
                (comment) => comment._id.toString() === req.body.commentId.toString()
            );

            if (!commentExits) {
                return res.status(404).json({
                    success: false,
                    message: "Comment not found",
                });
            }
            post.comments.pull(req.body.commentId);

            await post.save();

            return res.status(200).json({
                success: true,
                message: "Comment deleted",
            });

        } else {
            let commentExits = post.comments.find(
                (comment) => comment.user.toString() === req.user._id.toString()
            );

            if (!commentExits) {
                return res.status(404).json({
                    success: false,
                    message: "Comment not found",
                });
            }

            post.comments.pull(commentExits._id);

            await post.save();

            return res.status(200).json({
                success: true,
                message: "Comment deleted",
            });
        }


    } catch {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}

exports.getPost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id).populate('owner', 'name').populate('comments.user', 'name').populate('recipients.user', 'name');
        if (!post) {
            return res.status(404).json({
                success: false,
                message: "Post not found",
            });
        }

        res.status(200).json({
            success: true,
            post,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}

exports.getPosts = async (req, res) => {
    try {
        const posts = await Post.find().populate('owner', 'name').populate('comments.user', 'name').populate('recipients.user', 'name');
        res.status(200).json({
            success: true,
            posts,
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}

exports.getMyPosts = async (req, res) => {
    try {
        const posts = await Post.find({ owner: req.user._id }).populate('owner', 'name').populate('comments.user', 'name').populate('recipients.user', 'name');
        res.status(200).json({
            success: true,
            posts,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}

exports.getMyRecipients = async (req, res) => {
    try {
        const posts = await Post.find({ recipients: { $in: [req.user._id] } }).populate('owner', 'name').populate('comments.user', 'name').populate('recipients.user', 'name');

        res.status(200).json({
            success: true,
            posts,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}

// Get posts in distance of 10km and return posts in order of distance and with distance
exports.getNearbyPosts = async (req, res) => {
    try {
        const posts = await Post.find({
            location: {
                $near: {
                    $maxDistance: 10000,
                    $geometry: {
                        type: "Point",
                        coordinates: [req.body.longitude, req.body.latitude],
                    },
                },
            },
        }).populate('owner', 'name').populate('comments.user', 'name').populate('recipients.user', 'name');

        res.status(200).json({
            success: true,
            posts,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}

exports.updatePost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);

        if (!post) {
            return res.status(404).json({
                success: false,
                message: "Post not found",
            });
        }

        if (post.owner.toString() !== req.user._id.toString()) {
            return res.status(403).json({
                success: false,
                message: "You are not authorized to update this post",
            });
        }

        post.title = req.body.title;
        post.description = req.body.description;
        post.longitude = req.body.longitude;
        post.latitude = req.body.latitude;
        post.location = {
            type: "Point",
            coordinates: [req.body.longitude, req.body.latitude],
        };

        await post.save();

        res.status(200).json({
            success: true,
            message: "Post updated",
        });
    }
    catch (error)  {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}