import { utilService } from './util.service'
import { storageService } from './async-storage.service'
import { httpService } from './http.service'

const BASE_URL = 'toy/'

export const toyService = {
    query,
    remove,
    getById,
    save,
    getEmptyToy,
    getDefaultFilter
}

// const labels = ['Doll', 'Battery Powered', 'Talking', 'Beauty', 'Girls', 'Animal', 'Trip', 'Sport', 'Ride']

// const toys = [
//     { _id: 't101', name: 'Talking Doll', price: 123, labels: ['Doll', 'Battery Powered', 'Talking'], createdAt: 1631031801011, inStock: true },
//     { _id: 't102', name: 'Barbie', price: 200, labels: ['Doll', 'Beauty', 'Girls'], createdAt: 1695215515424, inStock: true },
//     { _id: 't103', name: 'Tedd', price: 50, labels: ['Doll', 'Talking', 'Animal'], createdAt: 1695215515430, inStock: true },
//     { _id: 't104', name: 'Bratz', price: 98, labels: ['Doll', 'Beauty', 'Girls'], createdAt: 1695215515444, inStock: true },
//     { _id: 't105', name: 'Bike', price: 90, labels: ['Trip', 'Sport', 'Ride'], createdAt: 1695215515490, inStock: true }
// ]

function query(filterBy = {}) {
    return httpService.get(BASE_URL, filterBy)

    // let toysToShow = utilService.loadFromStorage(TOY_STORAGE_KEY)
    // if (!toysToShow || !toysToShow.length) utilService.saveToStorage(TOY_STORAGE_KEY, toys)

    // toysToShow = onSetFilter(filterBy, toysToShow)
    // return Promise.resolve(toysToShow)
}

// function onSetFilter(filterBy, toysToShow) {
//     const { sortBy, byName, byLable, inStock } = filterBy
//     if (sortBy) toysToShow = onSetSortByFilter(sortBy, toysToShow)
//     if (byLable) toysToShow = toysToShow.filter(toy => toy.labels && toy.labels.includes(byLable))
//     if (byName) {
//         const regExp = new RegExp(byName, 'i')
//         toysToShow = toysToShow.filter(toy => regExp.test(toy.name))
//     }
//     if (inStock) {
//         const regExp = new RegExp(inStock, 'i')
//         toysToShow = toysToShow.filter(toy => regExp.test(toy.inStock))
//     }
//     return toysToShow
// }

// function onSetSortByFilter(sortBy, toysToShow) {
//     if (sortBy === 'name') {
//         toysToShow.sort((toyA, toyB) => toyA.name.localeCompare(toyB.name))
//     } else if (sortBy === 'price') {
//         toysToShow.sort((toyA, toyB) => toyA.price - toyB.price)
//     } else if (sortBy === 'createdAt') {
//         toysToShow.sort((toyA, toyB) => toyB.createdAt - toyA.createdAt)
//     }
//     return toysToShow
// }

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

function getEmptyToy(name, price) {
    let labelIdx = utilService.getRandomIntInclusive(0, labels.length)
    return {
        name,
        price,
        createdAt: Date.now(),
        inStock: true,
        label: labels[labelIdx]
    }
}

function getDefaultFilter() {
    return { byName: '', inStock: '', byLable: '', sortBy: '' }
}