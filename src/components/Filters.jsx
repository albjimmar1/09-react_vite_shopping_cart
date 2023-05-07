import './Filters.css'
import { useId } from 'react'
import { useFilters } from '../hooks/useFilters.js'

export function Filters() {
    const { filters, setFilters } = useFilters()
    const minPriceFilterId = useId()
    const categoryFilterId = useId()

    const handleChangeMinPrice = (event) => {
        setFilters(previusState => ({
            ...previusState,
            minPrice: event.target.value
        }))
    }

    const handleChangeCategory = (event) => {
        setFilters(previusState => ({
            ...previusState,
            category: event.target.value
        }))
    }

    return (
        <section className='filters'>
            <div>
                <label htmlFor={minPriceFilterId}>Minimal price</label>
                <input
                    id={minPriceFilterId} 
                    type='range' 
                    min='0' 
                    max='1000'
                    onChange={handleChangeMinPrice} 
                    value={filters.minPrice} />
                <span>${filters.minPrice}</span>
            </div>
            <div>
                <label htmlFor={categoryFilterId}>Category</label>
                <select id={categoryFilterId} onChange={handleChangeCategory}>
                    <option value='all'>All</option>
                    <option value='home-decoration'>Home decoration</option>
                    <option value='laptops'>Laptops</option>
                    <option value='smartphones'>Smartphones</option>
                    <option value='fragrances'>Fragrances</option>
                    <option value='skincare'>Skincare</option>
                    <option value='groceries'>Groceries</option>
                </select>
            </div>
        </section>
    )
}