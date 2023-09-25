
import { Link } from "react-router-dom"
import { ToyPreview } from "./ToyPreview"

export function ToyList({ toys, onRemoveToy }) {

    return (
        // <div className="toy-list">
        //     {toys.map(toy =>
        //         <div className="toy-preview" key={toy._id}>
        //             <ToyPreview toy={toy} />
        //             <div className="editing-toy-btn">
        //                 <button onClick={() => onRemoveToy(toy._id)}>x</button>
        //                 <Link to={`/toy/edit/${toy._id}`}>
        //                     <button>Edit</button>
        //                 </Link>
        //             </div>
        //         </div>
        //     )}
        // </div>
        <ul className="toy-list">
            {toys.map(toy =>
                <li className="toy-preview" key={toy._id}>
                    <ToyPreview toy={toy} />
                    <div className="editing-toy-btn">
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
