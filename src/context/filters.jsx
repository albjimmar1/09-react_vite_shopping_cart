import { createContext, useState } from 'react'

// To consume
export const FiltersContext = createContext()

// To provide
export function FiltersProvider({ children }) {
    const [filters, setFilters] = useState({
        category: 'all',
        minPrice: 0
    });
    return (
        <FiltersContext.Provider value={{
            filters, setFilters
        }}>
            {children}
        </FiltersContext.Provider>
    )
}