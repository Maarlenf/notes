import { BsSearch, BsPlusCircle } from "react-icons/bs";
import { useState } from "react";
import { Notes } from "../Notes/Notes";

export function Dashboard() {
  const [find, setFind] = useState();
  const prueba = {
    title: 'Aqui si funciona',
    text:'SIIIIII LO LOGRE',
  }

  return (
    <div className="min-h-full">
      <nav className="border-2 border-b-amber-900">
        <div className="container mx-auto max-w-7xl ml-3 -sm:ml-1">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <div className="flex w-12 h-10">
                <div className="border w-10 h-10 rounded-xl">
                  <p className="block-inline bg-amber-800 rounded-md text-center font-[Dongle] text-3xl/10 text-white">
                    CN
                  </p>
                </div>
              </div>
              <div className="flex justify-around rounded-xl items-center border-2 px-4 h-10 border-gray-300 ">
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
            </div>
          </div>
        </div>
      </nav>
      <header>
        <p className="text-sm mb-2 text-center">Sections</p>
        <div className="flex w-full px-2 items-center justify-center border-r-2-grey-300">
          <span className="text-center bg-gray-800 text-white p-2 shadow-lg  border border-gray-500 rounded-s-xl w-full">
            Notes
          </span>
          <span className="text-center text-gray-600 border border-gray-500 hover:bg-gray-700 hover:text-white p-2 shadow-lg rounded-e-xl w-full">
            Reminders
          </span>
        </div>
      </header>
      <main>
      <div className="container flex items-center mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          {/* <div className="flex items-center w-14 h-14 rounded-full hover:"> */}
          <BsPlusCircle size={48} className="peer ..." />
          <p className="flex invisible peer-hover:visible bg-gray-700 text-white text-sm rounded-xl w-40 h-8 text-center items-center justify-center">
            Create new note
          </p>
        </div>
        <div className="flex justify-around items-center flex-row flex-wrap gap-4 mb-4">
          <Notes text={prueba}/>
          <Notes text=''/>
          <Notes text=''/>
          <Notes text=''/>
          <Notes text={prueba}/>
        </div>
      </main>
    </div>
  );
}
