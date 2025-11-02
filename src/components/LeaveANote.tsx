"use client";

import { useState, useRef } from "react";
import { motion } from "motion/react";
import axios from "axios";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import config from "@/config";

type Note = { _id: string; noteText: string };

const COLORS = [
  "bg-yellow-200",
  "bg-pink-200",
  "bg-blue-200",
  "bg-green-200",
  "bg-purple-200",
  "bg-orange-200",
];

export const LeaveANote = () => {
  const queryClient = useQueryClient();
  const wallRef = useRef<HTMLDivElement | null>(null);
  const [newNote, setNewNote] = useState("");

  const fetchNotes = async () => {
    const { data } = await axios.get(`${config.BACKEND_URL}/notes`);
    return data.notes;
  };
  const { data: notes = [] } = useQuery<Note[]>({
    queryKey: ["notes"],
    queryFn: fetchNotes,
  });

  const addNote = useMutation({
    mutationFn: async (noteText: string) =>
      axios.post(`${config.BACKEND_URL}/add-note`, { note: noteText }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notes"] });
      setNewNote("");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newNote.trim()) return;
    addNote.mutate(newNote.trim());
  };

  const getColor = (id: string) => COLORS[id.charCodeAt(0) % COLORS.length];

  return (
    <div className="space-y-5">
      <h2 className="text-2xl font-bold">Notes Wall</h2>
      <section className="flex flex-col gap-4 md:flex-row">
        <div
          ref={wallRef}
          className="relative h-[400px] w-full overflow-hidden rounded-xl border bg-white transition-colors duration-300 md:flex-1 dark:bg-neutral-900"
        >
          <div className="flex flex-wrap p-4">
            {notes.length === 0 ? (
              <p className="mt-4 text-center text-sm text-gray-500">
                No notes yet. Add one below!
              </p>
            ) : (
              notes.map((note) => {
                return (
                  <motion.div
                    key={note._id}
                    drag
                    dragConstraints={wallRef}
                    dragMomentum={false}
                    className={`${getColor(
                      note._id,
                    )} absolute cursor-grab rounded-lg border border-black/10 p-3 shadow-md active:cursor-grabbing`}
                  >
                    <p className="text-sm font-medium wrap-break-word text-gray-800">
                      {note.noteText}
                    </p>
                  </motion.div>
                );
              })
            )}
          </div>
        </div>
        {addNote.error && (
          <p className="text-[10px] leading-0">{addNote.error.message}</p>
        )}
        <div className="space-y-2 md:w-80">
          <form onSubmit={handleSubmit} className="flex gap-2">
            <Input
              value={newNote}
              onChange={(e) => setNewNote(e.target.value)}
              placeholder="Write a note..."
              maxLength={20}
              disabled={addNote.isPending}
            />
            <Button
              type="submit"
              disabled={!newNote.trim() || addNote.isPending}
            >
              Add
            </Button>
          </form>
          <p className="text-xs text-gray-500">✨ Drag notes around freely!</p>
        </div>
      </section>
    </div>
  );
};
