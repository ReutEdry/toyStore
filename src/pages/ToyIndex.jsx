import { useDispatch, useSelector } from 'react-redux'
import { toyService } from '../services/toy.service'
import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service.js'
import { useEffect } from 'react'
import { loadToys, removeToyOptimistic, saveToy } from '../store/actions/toy.action'
import { ToyList } from '../comp/ToyList'
import { ToyFilter } from '../comp/ToyFilter'
import { SET_FILTER } from '../store/reducers/toy.reducer.js'
import { Link } from 'react-router-dom'
import { UserMsg } from '../comp/UserMsg'

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

    function onSetFilter(filterBy) {
        dispatch({ type: SET_FILTER, filterBy })
    }

    return (
        <div className='toy-container'>
            <main className='main-container'>
                <section className='filter-container'>

                    <button className='add-btn'><Link to="/toy/edit">Add toy 🧸</Link></button>
                    <ToyFilter filterBy={filterBy} onSetFilter={onSetFilter} />
                </section>
                {!isLoading && <ToyList toys={toys} onRemoveToy={onRemoveToy} />}
                {isLoading && <div>Loading...</div>}
            </main>
        </div>
    )

}