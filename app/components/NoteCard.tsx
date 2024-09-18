// components/NoteCard.js
import styles from '../styles/noteCard.module.css';
import React from 'react';

interface NoteCardProps {
  note: {
    color: string;
    title: string;
    content: string;
  };
  deleteNote: (index: number) => void;
  index: number;
}

export default function NoteCard({ note, deleteNote, index }: NoteCardProps) {
    return (
      <div
        style={{
          backgroundColor: note.color
        }}
        className= {styles.noteCard}
      >
        <h3 style={{ fontWeight: 'bold', marginBottom: '5px' }}>{note.title}</h3>
        <p>{note.content}</p>
        <button
          onClick={() => deleteNote(index)}
          className = {styles.button}
        >
          Delete
        </button>
      </div>
    );
  }
  