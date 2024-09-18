// pages/index.js
"use client"
import { useState, useEffect } from 'react';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import { Note } from '@/types';

export default function Home() {
  const [notes, setNotes] = useState<Note[]>([]);

  // Load notes from localStorage on component mount
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('notes') as string) as Note[] ?? '';
    if (savedNotes) setNotes(savedNotes);
  }, []);

  // Function to update localStorage after adding or deleting a note
  const updateLocalStorage = (updatedNotes: Note[]) => {
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
  };

  // Add a new note
  const addNote = (note: Note) => {
    const newNotes = [...notes, note];
    setNotes(newNotes);
    updateLocalStorage(newNotes);
  };

  // Delete a note
  const deleteNote = (index: number) => {
    const newNotes = notes.filter((_, i) => i !== index);
    setNotes(newNotes);
    updateLocalStorage(newNotes);
  };

  return (
    <div style={{ padding: '40px'}}>
      <h1>Quick Notes</h1>
      <NoteForm addNote={addNote} />
      <NoteList notes={notes} deleteNote={deleteNote} />
    </div>
  );
}
