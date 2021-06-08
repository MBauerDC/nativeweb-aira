import { Note } from '../types/Note';
import { noteOffsets } from './noteOffsets';
import { Octave } from '../types/Octave';

const getNoteValue = function ({ note, octave }: {
  note: Note;
  octave: Octave;
}): number {
  const offset = noteOffsets[note];

  const base = (octave + 1) * 12;
  const value = base + offset;

  return value;
};

export { getNoteValue };
