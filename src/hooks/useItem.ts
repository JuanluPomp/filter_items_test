import { useState } from "react"
import { INITIAL_ITEMS, type Item } from "../App"
import { toast } from "sonner"


export const useItem = () => {
    const [items, setItems] = useState<Item[]>(INITIAL_ITEMS)

    const addItem = (e: React.FormEvent<HTMLFormElement>)  => {
        e.preventDefault()
        const {elements}= e.currentTarget
        const input = elements.namedItem('item')
        const isInput = input instanceof HTMLInputElement
        if(isInput){{
        const text = input.value
        const newItem = {
            id: crypto.randomUUID(),
            text,
            timestamp: Date.now()
        }
        setItems(prev => [...prev, newItem])
        }}
    }

    const deleteItem = (id: Item['id']) => {
        setItems(prev => {
            return prev.filter(item => item.id !== id)
        })
    }

    const editItem = (id: Item['id']) => {
        toast.success(`item en edicion: ${id}`)
    }

    return {
        items,
        addItem,
        deleteItem,
        editItem
    }
}