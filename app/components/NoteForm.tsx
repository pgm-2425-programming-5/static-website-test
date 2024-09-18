// components/NoteForm.js
import { useState } from 'react';
import styles from '../styles/noteForm.module.css';
import { Note } from '@/types';
 

export default function NoteForm({ addNote }: { addNote: (note: Note) => void }) {
  const [note, setNote] = useState({ title: '', content: '', color: '#fef08a' });

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (note.title && note.content) {
      addNote(note);
      setNote({ title: '', content: '', color: '#fef08a' });
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }} className={styles.noteForm}>
      <input
        type="text"
        placeholder="Note Title"
        value={note.title}
        onChange={(e) => setNote({ ...note, title: e.target.value })}
        className={ styles.input }
      />
      <textarea
        placeholder="Note Content"
        value={note.content}
        onChange={(e) => setNote({ ...note, content: e.target.value })}
       className={ styles.textarea }
      />
      <label>
        Select Color:
        <input
          type="color"
          value={note.color}
          onChange={(e) => setNote({ ...note, color: e.target.value })}
          className={styles.colorInput}
        />
      </label>
      <button
        type="submit"
        className={styles.button}
      >
        Add Note
      </button>
    </form>
  );
}
