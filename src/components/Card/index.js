import './style.css'

export default function Card({ music }) {

    return (
        <div className='card'>
            <img
                className="card-img"
                src={music.cover}
                alt="imagem card"
            />
            <h1>{music.title}</h1>
            <p>{music.description}</p>
        </div>
    )
}