/* eslint-disable no-constant-condition */
import { useState } from "react";
import { FiEdit, FiBell } from "react-icons/fi";
import { NewNote } from "../NewNote/NewNote";
import { markAsReminder } from "../../service/functionOfNotes";

export function Notes({ title, text, id, reminders }) {
  const [editNote, setEditNote] = useState(false);
  const [editingNote, setEditing] = useState({ title, text, id });
  const [changeReminder, setChangeReminder] = useState(reminders);


  const toggleModalEdit = () => {
    setEditNote(!editNote);
    if (!editingNote) {
      setEditing("");
    }
  };

  function changeReminders() {
    if (changeReminder === false) {
      setChangeReminder((reminders = true));
      markAsReminder(editingNote.id, reminders);
    } else {
      setChangeReminder((reminders = false));
      markAsReminder(editingNote.id, reminders);
    }
  }

  return (
    <>
      {!editNote ? (
        <div className="flex flex-col items-center p-2 border border-amber-900 rounded-xl w-72 h-72 shadow-xl">
          <div className="flex w-full p-2 h-10 justify-between items-center">
            <p className="inline-block w-full rounded-lg p-1 text-neutral-950 font-bold truncate italic">
              {title}
            </p>
              {
                changeReminder === true? (
                  <div className="flex mt-12 -mr-8 flex-col items-center">
                  <div onClick={changeReminders} className="peer ... focus:shadow">
                <FiBell
                  size={20}
                  className="text-gray-600 hover:text-gray-900 fill-gray-600"
                />
              </div>
                 <p className="z-40 invisible peer-hover:visible text-neutral-50 bg-gray-700 rounded-xl p-1 text-center text-sm">
                 Remove as reminder
               </p>
               </div>
                ) : (
                  <div className="flex mt-12 -mr-8 flex-col items-center">
                  <div onClick={changeReminders} className="peer ... focus:shadow">
                <FiBell
                  size={20}
                  className="text-orange-950 hover:text-gray-900"
                />
              </div>
                <p className="z-40 invisible peer-hover:visible text-neutral-50 bg-gray-700 rounded-xl p-1 text-center text-sm">
                Mark as reminder
              </p>
              </div>
                )
              }
          </div>
          <div className="overflow-hidden scrollbar:!w-1.5 scrollbar:!h-1.5 scrollbar:bg-transparent scrollbar-track:!bg-slate-100 scrollbar-thumb:!rounded scrollbar-thumb:!bg-slate-300 scrollbar-track:!rounded hover:overflow-y-auto w-full h-full">
            <p className=" tracking-wider indent-2 break-words text-neutral-950">
              {text}
            </p>
          </div>

          <div className="flex flex-col-reverse items-center justify-center w-full">
            <FiEdit
              size={20}
              className="peer ... text-orange-950 hover:text-gray-900"
              onClick={toggleModalEdit}
            />
            {editNote && (
              <NewNote dataNote={editingNote} onClose={toggleModalEdit} />
            )}
            <p className="z-40 invisible peer-hover:visible text-neutral-50 bg-gray-700 rounded-xl p-2 text-center text-sm">
              Edit note
            </p>
          </div>
        </div>
      ) : (
        <NewNote dataNote={editingNote} onClose={toggleModalEdit} />
      )}
    </>
  );
}
