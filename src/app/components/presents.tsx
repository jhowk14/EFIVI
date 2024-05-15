

export default function Presents ({title, desc, srcImage} : {title: string, desc: string, srcImage: string}){
    return (
        <>
        <div className="presents" style={{  backgroundImage: `url("${srcImage}")`}}>
      
        </div>
        </>
    )
}