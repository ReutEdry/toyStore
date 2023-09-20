import { useDispatch, useSelector } from 'react-redux'
import { toyService } from '../services/toy.service'
import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service.js'
import { useEffect } from 'react'
import { loadToys, removeToyOptimistic, saveToy } from '../store/actions/toy.action'
import { ToyList } from '../comp/ToyList'
import { ToyFilter } from '../comp/ToyFilter'
import { SET_FILTER } from '../store/reducers/toy.reducer.js'

export function ToyIndex() {

    const dispatch = useDispatch()
    const toys = useSelector(storeState => storeState.toyModule.toys)
    const filterBy = useSelector(storeState => storeState.toyModule.filterBy)
    const isLoading = useSelector(storeState => storeState.toyModule.isLoading)

    useEffect(() => {
        loadToys(filterBy)
            .catch(err => {
                console.log('err:', err)
                showErrorMsg('Cannot load cars')
            })
    }, [filterBy])


    function onRemoveToy(toyId) {
        removeToyOptimistic(toyId)
            .then(() => {
                showSuccessMsg('Toy removed')
            })
            .catch(err => {
                console.log('Cannot remove toy', err)
                showErrorMsg('Cannot remove toy')
            })
    }

    function onAddToy() {
        const toyName = prompt('Enter doll name')
        const toyPrice = +prompt('Enter doll price')
        const newToy = toyService.getEmptyToy()
        const toyToSave = { ...newToy, name: toyName, price: toyPrice }
        saveToy(toyToSave)
            .then(savedToy => {
                showSuccessMsg(`Toy added (id: ${savedToy._id})`)
            })
            .catch(err => {
                console.log('Cannot add toy', err)
                showErrorMsg('Cannot add toy')
            })
    }


    function onSetFilter(filterBy) {
        dispatch({ type: SET_FILTER, filterBy })
    }

    return (
        <div>
            <h3>Toys App</h3>
            <main>
                <button onClick={onAddToy}>Add toy 🪀</button>
                <ToyFilter filterBy={filterBy} onSetFilter={onSetFilter} />
                {!isLoading && <ToyList toys={toys} onRemoveToy={onRemoveToy} />}
                {isLoading && <div>Loading...</div>}
            </main>
        </div>
    )

}