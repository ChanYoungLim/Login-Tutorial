const mongoose = require('mongoose');
const { Schema } = mongoose;

// Book 에서 사용할 서브다큐먼트의 스키마입니다.
const Author = new Schema({
    name: String,
    email: String
});

const Book = new Schema({
    title: String,
    authors: [Author],
    publishedDate: Date,
    price: Number,
    tags: [String],
    createdAt:{
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Book', Book);