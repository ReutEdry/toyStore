import { toyService } from "../../services/toy.service";
import { SET_TOYS, SET_IS_LOADING, REMOVE_TOY, TOY_UNDO, UPDATE_TOY, ADD_TOY } from "../reducers/toy.reducer";
import { store } from "../store";



export function loadToys(filterBy) {

    store.dispatch({ type: SET_IS_LOADING, isLoading: true })
    return toyService.query(filterBy)
        .then(toys => {
            store.dispatch({ type: SET_TOYS, toys })
            return toys
        })
        .catch(err => {
            console.log('toy action -> Cannot load todos', err)
            throw err
        })
        .finally(() => {
            store.dispatch({ type: SET_IS_LOADING, isLoading: false })
        })
}

export function removeToyOptimistic(toyId) {
    store.dispatch({ type: REMOVE_TOY, toyId })
    return toyService.remove(toyId)
        .catch(err => {
            store.dispatch({ type: TOY_UNDO })
            console.log('todo action -> Cannot remove todo', err)
            throw err
        })
}

export function saveToy(toyToSave) {
    console.log('toyToSave', toyToSave)
    const type = toyToSave._id ? UPDATE_TOY : ADD_TOY
    return toyService.save(toyToSave)
        .then((savedToy) => {
            store.dispatch({ type, savedToy })
            return savedToy
        })
        .catch(err => {
            console.log('toy action -> Cannot save toy', err)
            throw err
        })
}
