
import { Link } from "react-router-dom"
import { ToyPreview } from "./ToyPreview"

export function ToyList({ toys, onRemoveToy }) {

    return (
        <ul className="car-list">
            {toys.map(toy =>
                <li className="car-preview" key={toy._id}>
                    <ToyPreview toy={toy} />
                    <div>
                        <button onClick={() => onRemoveToy(toy._id)}>x</button>
                        <Link to={`/toy/edit/${toy._id}`}>
                            <button>Edit</button>
                        </Link>
                    </div>
                </li>
            )}
        </ul>
    )
}
