import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api/notes' });

export const fetchNotes = () => API.get('/');
export const createNote = (formData) => API.post('/', formData);
export const updateNote = (id, updatedNote) => API.put('/${id}', updatedNote);
export const deleteNote = (id) => API.delete('/${id}');