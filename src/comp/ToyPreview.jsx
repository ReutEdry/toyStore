import { Link } from "react-router-dom";

export function ToyPreview({ toy }) {

    const { name, inStock, price } = toy
    return (
        <article>
            <h1>{name}</h1>
            <h3>{price}$</h3>
            <h3>{(inStock) ? 'In stock' : 'Not in stock'}</h3>
        </article>
    )
}