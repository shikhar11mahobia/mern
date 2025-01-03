const express = require('express');
const Note = require('../models/Note');
const multer = require('multer');
const router = express.Router();

const upload = multer({ dest: 'uploads/' });

// Create a new note
router.post('/', upload.single('image'), async (req, res) => {
  try {
    const { title, description } = req.body;
    const image = req.file ? req.file.path : null;
    const note = new Note({ title, description, image });
    await note.save();
    res.status(201).json(note);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get all notes
router.get('/', async (req, res) => {
  try {
    const notes = await Note.find();
    res.status(200).json(notes);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Update a note
router.put('/:id', async (req, res) => {
  try {
    const updatedNote = await Note.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedNote);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete a note
router.delete('/:id', async (req, res) => {
  try {
    await Note.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Note deleted' });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;