import { useState } from "react"
import type { MenuItem, OrderItem } from "../types"

/* funcion useOrder
    * <> generic : Para no especificar datos 
    * <OrderItem[]> : Ahi estas tomando la estructura de datos de tu OrderItem
 */
export default function useOrder() {
    const [order, setOrder] = useState<OrderItem[]>([])


    /** Creamos la función 'addItem' para agregar */
    const addItem = (item: MenuItem) => {
        const itemExist = order.find(orderItem => orderItem.id === item.id)
        /**Si el item existe , se contara */
        if (itemExist) {
            const updatedOrder = order.map(orderItem => orderItem.id === item.id ?
                { ...orderItem, quntity: orderItem.quntity + 1 } :
                orderItem
            )
            setOrder(updatedOrder)
        } else {
            const newItem: OrderItem = { ...item, quntity: 1 }
            setOrder([...order, newItem])
        }
    }
        /**Creamos la funcion para eliminar pedido */
            const removeItem = (id : MenuItem ['id']) => {
            setOrder(order.filter(item => item.id !== id ))
        }

    return {
        order,
        addItem,
        removeItem
    };
}
