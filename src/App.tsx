import { useState } from "react"


const INITIAL_ITEMS = [
  {
    id: 1,
    timestamp: new Date(),
    text: 'Videjuegos'
  },
  {
    id: 2,
    timestamp: new Date(),
    text: 'Ropa'
  },
  {
    id: 3,
    timestamp: new Date(),
    text: 'Electrodomesticos'
  }
]

function App() {

  const [items, setItems] = useState(INITIAL_ITEMS)
  return (
    <>
      <main className=' mx-10 my-10 grid grid-cols-2'>
          <aside className="  border border-gray-300 rounded-md shadow-md shadow-sky-400 w-3/5 px-2  pb-5 space-y-4 bg-gray-100">
            <h1 className=' text-start text-xl font-bold mt-10'>Prueba tecnica react</h1>
            <h2 className=" text-start text-lg ">Seleccionar y eliminar elementos de una lista.</h2>
            <form className=" flex flex-col items-start">
              <label className=" ">
                Ingrese el elemento a buscar
                <input
                  className=" ml-2 border border-gray-400 rounded-sm p-1 bg-white"
                  required={true}
                  placeholder="Eje. videojuegos"
                  type="text"
                />
              </label>
              <button
                className=" border border-gray-400 text-white bg-sky-600 hover:bg-sky-700 cursor-pointer rounded-md w-3/4 mt-5"
                type="submit"
              >Buscar elemento</button>
            </form>
          </aside>
          <section className=" flex flex-col items-start">
            <h1 className=" text-lg font-black my-5">Lista de elementos</h1>
            <ul className=" space-y-2">
              {items.map(item => (
                <div key={item.id}>
                  <li>{`${item.id}.- ${item.text}`}</li>
                  <li>{item.timestamp.toDateString()}</li>
                </div>
              ))}
              
            </ul>
          </section>
      </main>
    </>
  )
}

export default App
