/* eslint-disable no-constant-condition */
import { useEffect, useState } from "react";
import { FiX } from "react-icons/fi";
import { editNote, noteNew } from "../../service/functionOfNotes";

export function NewNote({ onClose, dataNote }) {
  const [title, setTitle] = useState(dataNote.title);
  const [note, setNote] = useState(dataNote.text);

  // function createNewNote(e) {
  //   e.preventDefault();
  //   noteNew(title, note);
  //   onClose();
  // }
  useEffect(() => {
    setTitle(dataNote.title);
    setNote(dataNote.text);
  }, [dataNote.title, dataNote.text]);

  const confirmAction = () => {
    if (!dataNote) {
      noteNew(title, note);
    } else {
      editNote(dataNote.oid, title, note);
    }
    onClose();
  };

  return (
    <>
      <div className="flex flex-col items-center p-2 border-2 border-gray-700 rounded-xl  w-72 h-72 ">
        <form className="flex flex-col">
          <div className="flex w-full justify-between items-center">
            <input
              className=" indent-2 h-8 ml-2 w-46 mt-1 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-amber-800 focus:ring-amber-800 block rounded-md sm:text-sm focus:ring-1"
              type="text"
              value={title}
              placeholder="Example... Cats"
              onChange={(e) => setTitle(e.target.value)}
            />
            <div className="flex items-center">
              <FiX onClick={onClose} size={25} className="-ml-8 mb-2" />
            </div>
          </div>
          <textarea
            value={note}
            placeholder="Example ...The cats are beatiful"
            onChange={(e) => setNote(e.target.value)}
            autoCapitalize="words"
            cols={34}
            rows={7}
            className="resize-none indent-2 mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-amber-800 focus:ring-amber-800 block w-full rounded-md sm:text-sm focus:ring-1"
          ></textarea>

          <button
            type="submit"
            onClick={confirmAction}
            className="self-end mt-4 mr-2 rounded-xl bg-gray-900 text-white text-sm p-1 w-12"
          >
            Save
          </button>
        </form>
      </div>
    </>
  );
}
