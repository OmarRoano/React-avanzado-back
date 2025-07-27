//let posts = [
//    { id: 1, title: 'Primer Post', content: 'Hola Mundo'}
//]

//module.exports = posts


const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: String,
    content: String,
    user_id: {type: mongoose.Schema.Types.ObjectId, ref : 'User'},
    create_at: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Post', postSchema);