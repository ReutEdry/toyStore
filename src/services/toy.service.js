import { utilService } from './util.service'
import { storageService } from './async-storage.service'

const TOY_STORAGE_KEY = 'toyDB'

export const toyService = {
    query,
    remove,
    getById,
    save,
    getEmptyToy,
    getDefaultFilter
}

const labels = ['Doll', 'Battery Powered', 'Talking', 'Beauty', 'Girls', 'Animal', 'Trip', 'Sport', 'Ride']

const toys = [
    { _id: 't101', name: 'Talking Doll', price: 123, labels: ['Doll', 'Battery Powered', 'Talking'], createdAt: 1631031801011, inStock: true },
    { _id: 't102', name: 'Barbie', price: 200, labels: ['Doll', 'Beauty', 'Girls'], createdAt: 1695215515424, inStock: true },
    { _id: 't103', name: 'Tedd', price: 50, labels: ['Doll', 'Talking', 'Animal'], createdAt: 1695215515430, inStock: true },
    { _id: 't104', name: 'Bratz', price: 98, labels: ['Doll', 'Beauty', 'Girls'], createdAt: 1695215515444, inStock: true },
    { _id: 't105', name: 'Bike', price: 90, labels: ['Trip', 'Sport', 'Ride'], createdAt: 1695215515490, inStock: true }
]

function query(filterBy = {}) {
    let toysToShow = utilService.loadFromStorage(TOY_STORAGE_KEY)
    if (!toysToShow || !toysToShow.length) utilService.saveToStorage(TOY_STORAGE_KEY, toys)

    toysToShow = onSetFilter(filterBy, toysToShow)
    return Promise.resolve(toysToShow)
}

function onSetFilter(filterBy, toysToShow) {
    const { sortBy, byName, byLable, inStock } = filterBy
    if (sortBy) toysToShow = onSetSortByFilter(sortBy, toysToShow)
    if (byLable) toysToShow = toysToShow.filter(toy => toy.labels && toy.labels.includes(byLable))
    if (byName) {
        const regExp = new RegExp(byName, 'i')
        toysToShow = toysToShow.filter(toy => regExp.test(toy.name))
    }
    if (inStock) {
        const regExp = new RegExp(inStock, 'i')
        toysToShow = toysToShow.filter(toy => regExp.test(toy.inStock))
    }
    return toysToShow
}

function onSetSortByFilter(sortBy, toysToShow) {
    if (sortBy === 'name') {
        toysToShow.sort((toyA, toyB) => toyA.name.localeCompare(toyB.name))
    } else if (sortBy === 'price') {
        toysToShow.sort((toyA, toyB) => toyA.price - toyB.price)
    } else if (sortBy === 'createdAt') {
        toysToShow.sort((toyA, toyB) => toyB.createdAt - toyA.createdAt)
    }
    return toysToShow
}

function remove(toyId) {
    return storageService.remove(TOY_STORAGE_KEY, toyId)
}

function getById(toyId) {
    return storageService.get(TOY_STORAGE_KEY, toyId)
}

function save(toy) {
    console.log('toy', toy._id)
    if (toy._id) {
        console.log('hey from if')
        return storageService.put(TOY_STORAGE_KEY, toy)
    } else {
        console.log('hey from else')
        return storageService.post(TOY_STORAGE_KEY, toy)
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