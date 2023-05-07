import './Footer.css'
import { IS_DEVELOPMENT } from '../config.js'
import { useFilters } from '../hooks/useFilters.js'
import { useCart } from '../hooks/useCart'

export function Footer () {
  const { filters } = useFilters()
  const { cart } = useCart()

  return (
    <footer className='footer'>
      <h4>SPA React using useContext, useId, useReduce, useState</h4>
      { IS_DEVELOPMENT && JSON.stringify(filters, null, 2) }
      { IS_DEVELOPMENT && JSON.stringify(cart, null, 2) }
    </footer>
  )
}