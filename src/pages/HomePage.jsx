import logoUrl from '../assets/images/toyStore.png'

export function HomePage() {

    return (
        <section className='home'>
            <h1>Welcome to Reut's toy store!</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam architecto labore nesciunt officiis, numquam ipsum sunt corporis minima earum voluptatibus incidunt? Obcaecati commodi reprehenderit rerum nemo aperiam non facere voluptate!</p>
            <img src={logoUrl} />
        </section >
    )
}