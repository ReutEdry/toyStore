
import { Link } from "react-router-dom"
import { ToyPreview } from "./ToyPreview"
import { CardToyPreview } from "./CardToyPreview"

export function ToyList({ toys, onRemoveToy }) {

    return (
        <section className="toy">
            <div className="toy-list">
                {toys.map(toy =>
                    <div key={toy._id}>
                        <CardToyPreview toy={toy} onRemoveToy={onRemoveToy} />

                    </div>
                )}
            </div>
        </section>
    )
}
