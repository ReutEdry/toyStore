import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { toyService } from "../services/toy.service"
import { useSelector } from "react-redux"
import { utilService } from "../services/util.service"

export function ToyDetails() {
    const [toyToDisplay, setToyToDisplay] = useState(null)
    const { toyId } = useParams()
    const navigate = useNavigate();


    useEffect(() => {
        if (toyId) loadToy()

    }, [toyId])

    function loadToy() {
        toyService.getById(toyId)
            .then(setToyToDisplay)
            .catch(err => showErrorMsg('Cannot load car'))
    }

    function onBtnBackClick() {
        navigate('/toy')
    }
    if (!toyToDisplay) return <div>loading</div>
    const { name, price, labels, createdAt, img, inStock } = toyToDisplay
    return (
        <section className="details">

            <section className="details-display">
                <div className="img">

                    <img src={img} alt="" />
                </div>
                <h2>{name}</h2>
                <ul>
                    {labels.map(label => <li key={label}> {label}</li>)}
                </ul>
                <h1>{inStock ? 'In stock' : 'Out of atock'}</h1>
                <h1>{`Made ${utilService.formatDate(createdAt)}`}</h1>
                <h1>{price}$</h1>
                <button onClick={() => onBtnBackClick()}>Back</button>
            </section>
        </section>
    )
}