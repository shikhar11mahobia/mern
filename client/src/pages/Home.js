import { useEffect, useState } from 'react';
import { fetchNotes, deleteNote } from '../api';
import Note from '../components/Note';

const Home = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchNotes().then((res) => setNotes(res.data));
  }, []);

  const handleDelete = (id) => {
    deleteNote(id).then(() => setNotes(notes.filter((note) => note._id !== id)));
  };

  return (
    <div>
      <h1>Notes</h1>
      {notes.map((note) => (
        <Note key={note._id} note={note} onDelete={handleDelete} />
      ))}
    </div>
  );
};

export default Home;