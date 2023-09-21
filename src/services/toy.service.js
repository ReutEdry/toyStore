import { httpService } from './http.service'
import { utilService } from '../services/util.service'

const BASE_URL = 'toy/'
const labels = ['Doll', 'Battery Powered', 'Talking', 'Beauty', 'Girls', 'Animal', 'Trip', 'Sport', 'Ride']


export const toyService = {
    query,
    remove,
    getById,
    save,
    getDefaultFilter,
    getEmptyToy
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
    return { byName: '', inStock: '', byLable: [], sortBy: '' }
}

function getEmptyToy() {
    let labelIdx = utilService.getRandomIntInclusive(0, labels.length)
    return {
        name: '',
        price: '',
        createdAt: Date.now(),
        lables: [labels[labelIdx]],
        inStock: true,
    }
}