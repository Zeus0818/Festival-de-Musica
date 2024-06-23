// Definimos las props para el componente MenuItem
import type { MenuItem } from "../types"

type MenuItemProps = {
    item: MenuItem 
    addItem: (item: MenuItem) => void; // func que no retorna nada
}

export default function MenuItem({ item ,addItem}: MenuItemProps) {
    return (

        <button 
            className="border-2 border-teal-400 hover:bg-teal-200 
            w-full p-3 flex justify-between "
            onClick = {() => addItem(item)} /**agregamos como coolback el addItem */
        >
            <p>{item.name}</p>
            <p  className="font-black">$.{item.price}</p>
        </button>
    )
}