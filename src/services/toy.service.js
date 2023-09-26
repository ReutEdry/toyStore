import { httpService } from './http.service'
import { utilService } from '../services/util.service'

const BASE_URL = 'toy/'
const labels = ['Doll', 'Battery Powered', 'Talking', 'Beauty', 'Girls', 'Animal', 'Trip', 'Sport', 'Ride']
const urls = ['https://images.unsplash.com/photo-1485550409059-9afb054cada4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80', 'https://images.unsplash.com/photo-1633469924738-52101af51d87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80', 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80']


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
    let imgIdx = utilService.getRandomIntInclusive(0, urls.length)
    return {
        name: '',
        price: '',
        createdAt: Date.now(),
        lables: [labels[labelIdx]],
        inStock: true,
        img: urls[imgIdx]

    }
}