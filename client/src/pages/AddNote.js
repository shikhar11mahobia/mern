import { createNote } from '../api';
import NoteForm from '../components/NoteForm';

const AddNote = () => {
  const handleSubmit = (formData) => {
    createNote(formData).then(() => alert('Note added!'));
  };

  return <NoteForm onSubmit={handleSubmit} />;
};

export default AddNote;