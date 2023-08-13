// I will build a twilo integration create a mongo model for chats between users
const moongose = require('mongoose');

const chatSchema = new moongose.Schema({
    user1: {
        type: moongose.Schema.Types.ObjectId,
        ref: 'User',
    },
    user2: {
        type: moongose.Schema.Types.ObjectId,
        ref: 'User',
    },
    chat_id: {
        type: String,
        required: [true, 'Please enter chat_id'],
    },
});

module.exports = moongose.model('Chat', chatSchema);