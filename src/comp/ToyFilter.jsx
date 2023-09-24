import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { LabelSelect } from "./LabelSelect"
import { InStock } from "./InStock"
import { SortBy } from "./SortBy"
import { FilterInput } from "./FilterInput"

export function ToyFilter({ filterBy, onSetFilter }) {

    const labels = useSelector(storeState => storeState.toyModule.lables)
    const [filterByToEdit, setFilterByToEdit] = useState({ ...filterBy })

    useEffect(() => {
        onSetFilter(filterByToEdit)
    }, [filterByToEdit])

    function handleChange({ target }) {
        const field = target.name
        let value = target.value
        setFilterByToEdit((prevFilter) => ({ ...prevFilter, [field]: value }))
    }

    const { byName, inStock, sortBy, byLable } = filterByToEdit
    return (
        <section className="toy-filter">
            <FilterInput handleChange={handleChange} byName={byName} />
            <LabelSelect handleChange={handleChange} labels={labels} byLable={byLable} />
            <InStock inStock={inStock} handleChange={handleChange} />
            <SortBy sortBy={sortBy} handleChange={handleChange} />
        </section>

    )
}