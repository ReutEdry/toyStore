import { useNavigate, useParams } from 'react-router-dom'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service.js'
import { useEffect, useState } from 'react'
import { toyService } from '../services/toy.service.js'
import { saveToy } from '../store/actions/toy.action.js'


export function ToyEdit() {
  const navigate = useNavigate()
  const [toyToEdit, setToyToEdit] = useState(toyService.getEmptyToy())

  const { toyId } = useParams()

  useEffect(() => {
    if (toyId) loadToy()
  }, [])

  function loadToy() {
    toyService.getById(toyId)
      .then(setToyToEdit)
      .catch(err => showErrorMsg('Cannot load car'))
  }

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
    setToyToEdit((prevToy) => ({ ...prevToy, [field]: value }))
  }

  function getToy(ev) {
    ev.preventDefault()
    saveToy(toyToEdit)
      .then((saveToy) => {
        showSuccessMsg(`Toy edited (id: ${saveToy._id})`)
        navigate('/toy')
        setToyToEdit(toyService.getEmptyToy())
      })
      .catch(err => {
        console.log('Cannot update toy', err)
        showErrorMsg('Cannot update toy')
      })
  }

  const { name, price } = toyToEdit

  return (
    <section className='toy-edit-container'>

      <section className="toy-edit">
        <h2>Edit Toy</h2>
        <form onSubmit={getToy} className='edit-form'>
          <div className='form-group'>

            <label htmlFor="name">Name:</label>
            <input required="" onChange={handleChange} type="text" name="name" id="name" placeholder='Toy name:' value={name} />
          </div>
          <div className='form-group'>
            <label htmlFor="price">Price:</label>
            <input required="" type="number" onChange={handleChange} name="price" id="price" placeholder='Toy price:' value={price} />
          </div>
          <button className='form-submit-btn'>Save</button>
        </form>
      </section>
    </section>
  )
}
