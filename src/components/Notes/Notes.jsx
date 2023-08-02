/* eslint-disable no-constant-condition */
import { useState } from "react";
import { FiEdit, FiBell } from "react-icons/fi";
import { NewNote } from "../NewNote/NewNote";

export function Notes({title, text}) {
  const [editNote, setEditNote ] = useState(false);
  const [editingNote, setEditing] = useState({title, text});

  const toggleModalEdit = () => {
    setEditNote(!editNote);
    if(!editingNote){
      setEditing('');
    }
}
 
  return (
    <>
      <div className="flex flex-col items-center p-2 border border-amber-900 rounded-xl w-72 h-72 shadow-xl">
        <div className="flex w-full p-2 h-10 justify-between items-center">
          <p className="inline-block w-full rounded-lg p-1 text-neutral-950 font-bold">{title}</p>
          <div className="flex mt-12 -mr-8 flex-col items-center">
            <div className="peer ... focus:shadow">
              <FiBell size={20} className="text-orange-950 hover:text-gray-900"/>
            </div>
            <p className="z-40 invisible peer-hover:visible text-neutral-50 bg-gray-700 rounded-xl p-1 text-center text-sm">
              Mark as reminder
            </p>
          </div>
        </div>
        <div className="overflow-hidden scrollbar:!w-1.5 scrollbar:!h-1.5 scrollbar:bg-transparent scrollbar-track:!bg-slate-100 scrollbar-thumb:!rounded scrollbar-thumb:!bg-slate-300 scrollbar-track:!rounded hover:overflow-y-auto w-full h-full">
        <p className= "tracking-wide indent-2 break-words text-neutral-950">{text}</p>
        </div>
       
    <div className="flex flex-col-reverse items-center justify-center w-full">
    <FiEdit size={20} className="peer ... text-orange-950 hover:text-gray-900" onClick={toggleModalEdit}/>
    {editNote && (
      <NewNote dataNote={editingNote} onClose={toggleModalEdit}/>
    )}
     <p className="z-40 invisible peer-hover:visible text-neutral-50 bg-gray-700 rounded-xl p-2 text-center text-sm">
              Edit note
            </p>
    </div>
   
      </div>
    </>
  );
}
