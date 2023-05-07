import './Products.css'
import { AddToCartIcon, RemoveFromCartIcon } from './Icons.jsx'
import { useCart } from '../hooks/useCart.js'

export function Products ({ products }) {
    const { addToCart, removeFromCart, cart } = useCart()

    const checkProductInCart = product => cart.some(item => item.id === product.id)
    
    return (
        <main className='products'>
            <ul>
                {products.slice(0, 9).map(product => {
                    const isProductInCart = checkProductInCart(product)
                    
                    return (
                        <li key={product.id}>
                            <img src={product.thumbnail} alt={product.title} />
                            <div className='title'><strong>{product.title}</strong>${product.price}</div>
                            <div className='button' onClick={
                                () => isProductInCart
                                    ? removeFromCart(product)
                                    : addToCart(product)
                                }>
                                <button style={{ backgroundColor: isProductInCart ? 'red' : '#85BB65' }}>
                                    {
                                        isProductInCart
                                            ? <RemoveFromCartIcon />
                                            : <AddToCartIcon />
                                    }
                                </button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </main>
    )
}