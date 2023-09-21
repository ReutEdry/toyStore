import { httpService } from './http.service'

const BASE_URL = 'toy/'

export const toyService = {
    query,
    remove,
    getById,
    save,
    getDefaultFilter
}

function query(filterBy = {}) {
    return httpService.get(BASE_URL, filterBy)
}

function remove(toyId) {
    return httpService.delete(BASE_URL + toyId)
}

function getById(toyId) {
    return httpService.get(BASE_URL + toyId)
}

function save(toy) {
    if (toy._id) {
        return httpService.put(BASE_URL, toy)
    } else {
        return httpService.post(BASE_URL, toy)
    }
}

function getDefaultFilter() {
    return { byName: '', inStock: '', byLable: '', sortBy: '' }
}