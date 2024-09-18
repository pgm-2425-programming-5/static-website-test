// components/NoteList.js
import NoteCard from './NoteCard';
import styles from '../styles/noteList.module.css';

import { Note } from '../../types'; // Assuming you have a 'Note' type defined in '../types'

export default function NoteList({ notes, deleteNote }: { notes: Note[], deleteNote: (index: number) => void }) {
  return (
    <div className={styles.noteList}>
      {notes.map((note, index) => (
        <NoteCard key={index} note={note} deleteNote={deleteNote} index={index} />
      ))}
    </div>
  );
}
