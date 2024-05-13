export default function Presents ({title, desc, srcImage} : {title: string, desc: string, srcImage: string}){
    return (
        <>
        <div className="presents" style={{  backgroundImage: `url("${srcImage}")`}}>
        <div className="p-content">
            <div className="p-title">
                <p className="t-text">{title}</p>
            </div>
            <div className="p-desc">
                <p className="d-text">{desc}</p>
            </div>
        </div>
    </div>
        </>
    )
}