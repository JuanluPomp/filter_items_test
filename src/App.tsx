import { useEffect} from "react"
import { toast, Toaster } from "sonner"
import Item from "./components/item/item"
import { useItems } from "./hooks/useItem"
import { useSEO } from "./hooks/useSEO"


export interface Item {
  id: `${string}-${string}-${string}-${string}-${string}`,
  timestamp: number,
  text: string
}

export const INITIAL_ITEMS : Item[] = [
  {
    id: crypto.randomUUID(),
    timestamp: Date.now(),
    text: 'Videjuegos'
  },
  {
    id: crypto.randomUUID(),
    timestamp: Date.now(),
    text: 'Ropa'
  },
  {
    id: crypto.randomUUID(),
    timestamp: Date.now(),
    text: 'Electrodomesticos'
  }
]

function App() {
  
  const {items, addItem, deleteItem, editItem} = useItems()
  useSEO({title: `[${items.length}] - Items Page`, description: 'Items Page'})
  useEffect(() => {
    toast.success(`items actualizados ${items.length}`)
  }, [items])
 

  return (
    <>
      <Toaster />
      <h1 className="mt-10 text-center font-bold text-3xl">Selector de items</h1>
      <main className=' mx-50 my-10 grid grid-cols-2 '>
          <aside className="   border border-gray-300 rounded-md shadow-md shadow-sky-400 max-w-4/6 px-3 pb-5 space-y-4 bg-gray-100 max-h-100 mt-15">
            <h1 className=' text-start text-xl font-bold mt-10 uppercase'>Prueba tecnica react</h1>
            <h2 className=" text-start text-lg ">Seleccionar y eliminar elementos de una lista.</h2>
            <form
              aria-label="Add items"
              onSubmit={(e) => addItem(e)} 
              className=" flex flex-col items-start">
              <label className=" ">
                Ingrese el nombre del elemento
                <input
                  className=" ml-2 border border-gray-400 rounded-sm p-1 bg-white "
                  required={true}
                  placeholder="Eje. videojuegos"
                  type="text"
                  name="item"
                />
              </label>
              <button
                className=" border border-gray-400 text-white bg-sky-600 hover:bg-sky-700 cursor-pointer p-1 rounded-md w-3/4 mt-5 uppercase "
                type="submit"
              >Agregar elemento</button>
            </form>
          </aside>
          <section className=" flex flex-col items-start">
            <h1 className=" text-lg font-black my-5">Lista de elementos</h1>
            <ul className=" space-y-6">
              {items.map(item => (
                  <Item
                  item={item}
                  handleDelete={deleteItem}
                  handleEditItem={editItem}
                />
              ))}
              
            </ul> 
          </section>
      </main>
    </>
  )
}

export default App
