import { useNavigate, useParams } from 'react-router-dom'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service.js'
import { useState } from 'react'
import { toyService } from '../services/toy.service.js'
import { saveToy } from '../store/actions/toy.action.js'


export function ToyEdit() {
  const navigate = useNavigate()
  const [editValues, setEditValues] = useState([])
  const { toyId } = useParams()

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
      default:
        break
    }
    setEditValues((prevEditValue) => ({ ...prevEditValue, [field]: value }))
  }

  function getToy(ev) {
    ev.preventDefault()
    toyService.getById(toyId)
      .then(toy => {
        const { name, price } = editValues
        const toyToSave = { ...toy, name: name, price: price }
        saveToy(toyToSave)
          .then((saveToy) => {
            showSuccessMsg(`Toy edited (id: ${saveToy._id})`)
            navigate('/toy')
          })
          .catch(err => {
            console.log('Cannot update toy', err)
            showErrorMsg('Cannot update toy')
          })
      })
  }

  return (
    <section className="toy-edit">
      <h2>Edit Toy</h2>
      <form onSubmit={getToy}>
        <label htmlFor="name">Name:</label>
        <input onChange={handleChange} type="text" name="name" id="name" placeholder='Toy name:' />
        <label htmlFor="price"></label>
        <input type="number" onChange={handleChange} name="price" id="price" placeholder='Toy price:' />
        <button>Save</button>
      </form>
    </section>
  )
}
