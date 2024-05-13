export default function DuvidasAcordeon ({children}: {children: React.ReactNode}){
    return (
        <>
            <div className="acordeon">
                {children}
            </div>
        </>
    )
}