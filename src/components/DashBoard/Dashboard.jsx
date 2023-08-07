import { BsSearch, BsPlusCircle } from "react-icons/bs";
import { useEffect, useState } from "react";
// import { Notes } from "../Notes/Notes";
import { NewNote } from "../NewNote/NewNote";
import { FiBell, FiLogOut } from "react-icons/fi";
import { closeSesion } from "../../service/closeSesion";
import { useNavigate } from "react-router-dom";
import { createSnapShot, watchUser} from "../../service/functionOfNotes";
import { Notes } from "../Notes/Notes";



export default function Dashboard() {
  const navigate = useNavigate();
  const [find, setFind] = useState();
  const [openNewNote, setOpenNewNote] = useState(false);
  const [notes, setNotes] = useState([]);

  // const prueba = {
  //   title: "Aqui si funciona",
  //   text: "SIIIIII LO LOGRE",
  // };
 
   useEffect(() => {
    createSnapShot((querySnapshot) => {
      let addNote = [];
      querySnapshot.forEach((e) => {
        if(e.data().emailUser === watchUser()){
          addNote.push({oid: e.id, ...e.data()});
        }
      });
      setNotes(addNote);
    })

  },[openNewNote]);

 
  



  function handleExit(){
    closeSesion();
    navigate('/');
  }

  function createNote(){
    setOpenNewNote(!openNewNote);
  }

  return (
    <div className="w-full">
      <nav className="border-b-2 w-full border-b-amber-900 lg:w-full md:w-full">
        <div className="container mx-auto max-w-7xl ml-3 -sm:ml-1">
          <div className="flex h-16 items-center">
                <div className="flex w-14 h-10 border-2 border-amber-900 items-center justify-center rounded-lg bg-gray-500">
                  <p className="block-inline rounded-md text-center font-[Dongle] text-3xl/10 -mb-1 text-neutral-100">
                    LB
                  </p>
                </div>
           
              <div className="flex justify-around rounded-xl items-center border-2 px-4 h-10 border-gray-300 ml-2">
                <div className="flex items-center w-6 border-r-2  border-gray-300 h-10 -ml-2 ">
                  <BsSearch />
                </div>

                <input
                  type="text"
                  placeholder="Busca lo que quieras"
                  value={find || ""}
                  onChange={(e) => setFind(e.target.value)}
                  className="container w-80 h-9 hover:h-10 hover:border-2 hover:border-gray-400 p-3"
                ></input>
              </div>
              <div className="flex w-full ml-4 justify-start items-center -sm:hover:flex-col ">
                <FiLogOut onClick={handleExit} className="peer ... hover:ml-2"/>
              <p className="invisible peer-hover:visible w-16 rounded-xl text-center text-white text-sm bg-gray-700">Logout</p>
              </div>
            
          </div>
        </div>
      </nav>
      <header>
        <div className="flex w-full px-2 items-center mt-2 justify-center border-r-2-grey-300">
          <span className="text-center bg-gray-800 text-white p-2 shadow-lg  border border-gray-500 rounded-s-xl w-full">
            Notes
          </span>
          <div className="flex items-center justify-center border border-gray-500 hover:bg-gray-700 text-gray-600 hover:text-white p-2 shadow-lg rounded-e-xl w-full ">
            <p className="text-center mr-2 ">Reminders</p>
            <FiBell className="w-4" />
          </div>
        </div>
      </header>
      <main>
        <div className="container flex items-center mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          {/* <div className="flex items-center w-14 h-14 rounded-full hover:"> */}
          <BsPlusCircle size={48} className=" peer ... " onClick={createNote}/>
          <p className="flex invisible peer-hover:visible bg-gray-700 text-white text-sm rounded-xl w-40 h-8 text-center items-center justify-center">
            Create new note
          </p>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-flow-row px-10 w-full h-full place-items-center gap-10 -sm:grid-cols-1 -sm:justify-items-center mb-3">
        {openNewNote && <NewNote onClose={createNote} dataNote={''}/>}
        {notes.map((note) => {
          return(
            <ul key={note.date} className="auto-col">
              <li><Notes title={note.title} text={note.text}/></li>
            </ul>
          )
        })}
        </div>
      </main>
    </div>
  );
}
