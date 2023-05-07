import { createContext, useState } from "react"

export const CartContext = createContext()

export function CartProvider ({ children }) {
    const [cart, setCart] = useState([])

    const addToCart = product => {
        const productInCartIndex = cart.findIndex(item => item.id === product.id)
        if (productInCartIndex >= 0) {
            const newCart = structuredClone(cart)
            newCart[productInCartIndex].quantity += 1
            return setCart(newCart)
        }
        setCart(previusState => ([
            ...previusState,
            {
                ...product,
                quantity: 1
            }
        ]))
    }
    
    const clearCart = () => setCart([])

    const removeFromCart = product => {
        setCart(previusState => previusState.filter(item => item.id !== product.id))
    }

    return (
        <CartContext.Provider value={{
            cart, addToCart, clearCart, removeFromCart
        }}>
            {children}
        </CartContext.Provider>
    )
}