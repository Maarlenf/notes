/* eslint-disable no-constant-condition */
import { useEffect, useState } from "react";
import { FiX, FiTrash2, FiCheck } from "react-icons/fi";
import { editNote, noteNew, deleteNote } from "../../service/functionOfNotes";

function DeleteModal({onClose, id}){

  function handleDelete(e){
    e.preventDefault();
    deleteNote(id);
    onClose();
  }
  return (
    <>
     <div className="fixed inset-0 z-10">
                <div
                    className="fixed inset-0 w-full h-full bg-black opacity-40"
                    onClick={onClose}
                ></div>
                <div className="flex items-center min-h-screen px-4 py-8">
                    <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
                        <div className="mt-3 sm:flex">
                            <div className="mt-2 text-center sm:ml-4 sm:text-left">
                                <p className="mt-2 text-lg leading-relaxed text-gray-900">
                                This action is irreversible. Are you sure you want to delete the note?
                                </p>
                                <div className="items-center gap-2 mt-3 sm:flex">
                                    <button
                                        className="w-full mt-2 p-2.5 flex-1 text-white bg-gray-900 rounded-md outline-none ring-offset-2 ring-red-600 focus:ring-2 flex justify-center items-center shadow-xl"
                                        onClick={handleDelete}
                                    >
                                      <FiCheck size={20} className="-ml-3 mr-2"/>
                                        Delete
                                    </button>
                                    <button
                                        className="w-full mt-2 p-2.5 flex-1 text-gray-800 rounded-md outline-none border ring-offset-2 ring-indigo-600 focus:ring-2 shadow-xl"
                                        onClick={onClose}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
  )
}

export function NewNote({ onClose, dataNote }) {
  const [title, setTitle] = useState(dataNote.title);
  const [note, setNote] = useState(dataNote.text);
  const id = dataNote.id;
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setTitle(dataNote.title);
    setNote(dataNote.text);
  }, [dataNote.title, dataNote.text]);

  const confirmAction = (e) => {
    e.preventDefault();
    if (!dataNote) {
      noteNew(title, note);
    } else {
      editNote(id, title, note);
    }
    onClose();
  };

  function openModal(e){
    e.preventDefault();
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className="flex flex-col items-center p-2 border-2 border-gray-700 rounded-xl  w-72 h-72 ">
        <form className="flex flex-col">
          <div className="flex w-full justify-between items-center">
            <input
              className=" tracking-wide focus:text-[16px] indent-2 h-8 ml-2 w-46 mt-1 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-amber-800 focus:ring-amber-800 block rounded-md sm:text-sm focus:ring-1"
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
            className="resize-none tracking-wider focus:text-[16px] cursor-pointer indent-2 mt-1 px-4 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-amber-800 focus:ring-amber-800 block w-full rounded-md sm:text-sm focus:ring-1 scrollbar:!w-1.5 scrollbar:!h-1.5 scrollbar:bg-transparent scrollbar-track:!bg-slate-100 scrollbar-thumb:!rounded scrollbar-thumb:!bg-slate-300 scrollbar-track:!rounded hover:overflow-y-auto h-full"
          ></textarea>
          {!dataNote ? (
            <label aria-label="section options of save">
              <button
                type="submit"
                onClick={confirmAction}
                className="self-end mt-4 mr-2 rounded-xl bg-gray-900 text-white text-sm p-1 w-12"
              >
                Save
              </button>
            </label>
          ) : (
            <label aria-label="section options of save or trash" className="flex justify-between items-center">
             {isOpen && <DeleteModal onClose={onClose} id={id} />}
              <FiTrash2 size={20} className="mt-4 ml-3 peer ..." onClick={openModal}/>
              <p className="z-40 invisible peer-hover:visible text-neutral-50 bg-gray-700 rounded-xl p-2 text-center text-sm -ml-24">Delete note</p>
              <button
                type="submit"
                onClick={confirmAction}
                className="self-end mt-4 mr-2 rounded-xl bg-gray-900 text-white text-sm p-1 w-12"
              >
                Save
              </button>
            </label>
          )}
        </form>
      </div>
    </>
  );
}
