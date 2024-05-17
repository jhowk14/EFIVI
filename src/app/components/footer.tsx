import Image from "next/image";

export default function Footer (){
    return (
        <>
           <footer>
        <div className="w-[100px]">
            <a href="/">
                <Image src="/img/icons/1.png" alt="logo efivi"  width={0} height={0} sizes="100vw" style={{width: '100%', height: '100%'}}/>
            </a>
        </div>
        <nav className="f-menu">
            <a className="f-link" href="#"><h3>Sobre nós</h3></a>
            <a className="f-link" href="#"><h3>Privacidade</h3></a>
            <a className="f-link" href="#"><h3>Desenvolvedores</h3></a>
            <h2><strong>© 2024 - EFIVI</strong></h2>
        </nav>
        <div className="links">
            <a href="https://www.youtube.com/@SenhorGalvao" className="hover:bg-white" target="_blank"><Image src="/img/icons/youtube.png" alt="icone youtube" width='50' height='50'/></a>
            <a href="https://www.facebook.com/people/EFIVI-Eficiente-Visual/100063726155111/" className="hover:bg-white" target="_blank"><Image src="/img/icons/facebook.png" alt="icone facebook" width='50' height='50'/></a>
        </div>
    </footer>
        </>
    )
}