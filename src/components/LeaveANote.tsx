import config from "@/config";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { motion } from "motion/react";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type NotesType = {
  _id: string;
  noteText: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
};

const COLORS = [
  "bg-yellow-200",
  "bg-pink-200",
  "bg-blue-200",
  "bg-green-200",
  "bg-purple-200",
  "bg-orange-200",
];

export const LeaveANote = () => {
  const notesDivRef = useRef<HTMLDivElement>(null);
  const [newNote, setNewNote] = useState("");
  const [notePositions, setNotePositions] = useState<
    Record<string, { x: number; y: number }>
  >({});
  const queryClient = useQueryClient();

  const fetchNotes = async () => {
    const notes = await axios.get(`${config.BACKEND_URL}/notes`);
    return notes.data;
  };

  const { data: notes } = useQuery<{
    success: boolean;
    message: string;
    notes: Array<NotesType>;
  }>({
    queryKey: ["notes"],
    queryFn: fetchNotes,
  });

  const addNoteMutation = useMutation({
    mutationFn: async (noteText: string) => {
      const response = await axios.post(`${config.BACKEND_URL}/add-note`, {
        note: noteText,
      });
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notes"] });
      setNewNote("");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newNote.trim()) {
      addNoteMutation.mutate(newNote.trim());
    }
  };

  const getRandomColor = (id: string) => {
    const index = id.charCodeAt(id.length - 1) % COLORS.length;
    return COLORS[index];
  };

  return (
    <div className="space-y-4">
      <h6 className="text-xl font-bold">Note Wall</h6>

      <section className="block gap-4 md:flex">
        <div className="relative h-[400px] w-full rounded-xl border">
          <motion.div className="h-full p-4" ref={notesDivRef}>
            {notes?.notes.map((note, index) => {
              const position = notePositions[note._id] || { x: 0, y: 0 };
              return (
                <motion.div
                  key={note._id}
                  drag
                  dragConstraints={notesDivRef}
                  initial={{
                    x: (index % 3) * 150 + 10,
                    y: Math.floor(index / 3) * 100 + 10,
                  }}
                  animate={{
                    x: position.x || (index % 3) * 150 + 10,
                    y: position.y || Math.floor(index / 3) * 100 + 10,
                  }}
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  whileDrag={{ scale: 1.1, rotate: 5 }}
                  className={`${getRandomColor(note._id)} absolute inline-block max-w-[180px] min-w-[120px] cursor-move rounded-lg border-2 border-black/10 px-4 py-3 shadow-lg`}
                >
                  <p className="text-sm font-medium wrap-break-word text-gray-800">
                    {note.noteText}
                  </p>
                  <div className="absolute top-2 right-2 h-5 w-5 rounded-full bg-gray-400/30" />
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        <div className="mt-4 space-y-2 md:mt-0 md:w-80">
          <form onSubmit={handleSubmit} className="flex gap-2">
            <Input
              value={newNote}
              onChange={(e) => setNewNote(e.target.value)}
              placeholder="Leave a note..."
              maxLength={30}
              disabled={addNoteMutation.isPending}
            />
            <Button
              type="submit"
              disabled={!newNote.trim() || addNoteMutation.isPending}
            >
              Add
            </Button>
          </form>
          <p className="text-muted-foreground text-xs">
            Add a note and drag it around! ✨
          </p>
        </div>
      </section>
    </div>
  );
};
