const Note = ({ note, onDelete }) => {
    return (
      <div>
        <h3>{note.title}</h3>
        <p>{note.description}</p>
        {note.image && <img src={'http://localhost:5000/${note.image}'} alt="Note" />}
        <button onClick={() => onDelete(note._id)}>Delete</button>
      </div>
    );
  };
  
  export default Note;