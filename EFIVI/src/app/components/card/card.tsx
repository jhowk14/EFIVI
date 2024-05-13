export default function Card ({title, text}: {title: string, text: string}){
    return (
        <>
        <div className="card">
            <h3 className="card-title">{title}</h3>
            <p className="card-text">{text}</p>
        </div>
        </>
    )
    }