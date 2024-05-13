export default function Card2 ({image, text, altt}: {text: string, image: string, altt: string}){
    return (
        <>
        <div className="card2">
            <img className="l-img" src={image} alt={altt}/>
            <p className="card-text2">{text}</p>
        </div>
        </>
    )
    }