import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

export function ToyFilter({ filterBy, onSetFilter }) {

    const labels = useSelector(storeState => storeState.toyModule.lables)
    const [filterByToEdit, setFilterByToEdit] = useState({ ...filterBy })

    useEffect(() => {
        onSetFilter(filterByToEdit)
    }, [filterByToEdit])

    function handleChange({ target }) {
        const field = target.name
        let value = target.value

        switch (target.type) {
            case 'number':
            case 'range':
                value = +value || 0
                break
            case 'checkbox':
                value = target.checked
                break
            case 'select-multiple':
                value = Array.from(target.selectedOptions, (option) => option.value)
            default:
                break
        }
        setFilterByToEdit((prevFilter) => ({ ...prevFilter, [field]: value }))
    }

    const { byName, inStock, sortBy, byLable } = filterByToEdit
    return (
        <section className="bug-filter">
            <input onChange={handleChange} type="text"
                placeholder="Search toy by name?" id="byName" name="byName" value={byName} />

            <label htmlFor="">Search if in stock:</label>
            <select onChange={handleChange} name="inStock" value={inStock} id="">
                <option value="">All</option>
                <option value="true">Yes</option>
                <option value="false">No</option>
            </select>

            <label htmlFor="byLable">Search by lable:</label>
            <select onChange={handleChange} name="byLable" value={byLable} id="myLable" multiple>
                <option value="">All</option>
                {labels.map(label =>
                    <option key={label} value={label}>
                        {label}
                    </option>)}
            </select>
            <label htmlFor="sortBy">Sort by:</label>
            <select value={sortBy} name="sortBy" onChange={handleChange} id="sortBy">
                <option value="">All</option>
                <option value="name">Name</option>
                <option value="price">Price</option>
                <option value="createdAt">Created at</option>
            </select>
        </section>

    )
}