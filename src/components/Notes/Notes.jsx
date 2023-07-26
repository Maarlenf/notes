/* eslint-disable no-constant-condition */
import { useState } from "react";
import { FiBell, FiEdit } from "react-icons/fi";

export function Notes({ text }) {
  const [title, setTitle] = useState(text.title);
  const [note, setNote] = useState(text.text);
  const [changeIcon, setChangeIcon] = useState('');
 
    if (!{ text }) {
        setTitle("");
        setNote("");
        setChangeIcon('create')
      }

  return(
    <>
      <div className="flex flex-col items-center p-2 bg-amber-800 border border-amber-900 rounded-xl  w-72 h-72 ">
      <div className="flex w-auto ml-16 items-center">
        <input
          className="w-40 rounded-lg p-1 bg-amber-800 text-gray-400"
          type="text"
          value={title}
          placeholder="Cats"
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="ml-20 w-8 peer ... focus:shadow">
          <FiBell size={20} />
        </div>
        <p className="float-right z-40 invisible peer-hover:visible text-white bg-gray-600 rounded-xl w-auto p-1 text-center text-sm">
          Mark as reminder
        </p>
      </div>
      <textarea
        value={note}
        placeholder="The cats are beatiful"
        onChange={(e) => setNote(e.target.value)}
        autoCapitalize="words"
        cols={35}
        rows={8}
        className="resize-none bg-amber-800 text-gray-300"
      ></textarea>
      {changeIcon === 'create' ? (
 <button className="self-end mt-4 rounded-xl bg-gray-900 text-white text-sm p-1 w-12">
 Save
</button>
      ) : changeIcon === 'edit' ? (
<FiEdit size={20} />
      ) : null}
     
    </div>
    </>
  )

  
}
