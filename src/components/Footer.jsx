import './Footer.css'
import { IS_DEVELOPMENT } from '../config.js'
import { useFilters } from '../hooks/useFilters.js'
import { useCart } from '../hooks/useCart'

export function Footer () {
  const { filters } = useFilters()
  const { cart } = useCart()

  return (
    <footer className='footer'>
      <h4>SPA React using useContext, useId, useReducer, useState</h4>
    </footer>
  )
}