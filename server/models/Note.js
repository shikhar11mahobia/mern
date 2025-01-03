const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Note', NoteSchema);