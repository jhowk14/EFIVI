import Image from "next/image";

export default function Footer (){
    return (
        <>
           <footer>
        <div className="logo">
            <a href="#">
                <Image src="/img/icons/1.png" alt=""  width={0} height={0} sizes="100vw" style={{width: '100%', height: '100%'}}/>
            </a>
        </div>
        <nav className="f-menu">
            <a className="f-link" href="#"><h3>Sobre nós</h3></a>
            <a className="f-link" href="#"><h3>Privacidade</h3></a>
            <a className="f-link" href="#"><h3>Desenvolvedores</h3></a>
        </nav>
    </footer>
        </>
    )
}
