'use client'
import Image from "next/image";
import { useState } from "react";

export default function Header (){
    const [ hamburguer, setHamburguer ] = useState<boolean>(true)
    return (
        <>
        <header>
        <div className="logo">
            <a className="l-link" href="#">
                <Image className="l-img" src="/img/icons/2.png" alt=""  width={0} height={0} sizes="100vw"/>
                <h1 id="l-name" className="name">E F I V I</h1>
            </a>
        </div>
        <nav className={`menu ${!hamburguer ? 'show' : ''}`}>
            <a className="m-link" href="#"><h2>ONG</h2></a>
            <a className="m-link" href="#"><h2>Projetos</h2></a>
            <a className="m-link" href="#"><h2>Impacto</h2></a>
            <a className="m-link" href="#"><h2>Acessibilidade</h2></a>
        </nav>
        <button id="hamb">
           {hamburguer ? 
           (<Image className="h-img" onClick={()=>{setHamburguer(!hamburguer)}} src="/img/icons/hamb.png" alt="Ícone hamburguer para abrir o menu principal"  width={0} height={0} sizes="100vw"/> ) 
           :
           ( <Image className="x-img" onClick={()=>{setHamburguer(!hamburguer)}} src="/img/icons/x.png" alt="Ícone de x para ocultar o menu principal"  width={0} height={0} sizes="100vw"/>)}
        </button>
    </header>
    </>
    )
}